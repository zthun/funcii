import { IZDataRequest, IZDataSource, ZDataRequestBuilder } from '@zthun/helpful-query';
import { useEffect, useRef, useState } from 'react';
import { EMPTY, Subscription, defer, from, mergeMap } from 'rxjs';
import { ZAsyncDataState, ZAsyncLoading } from '../async-state/use-async-state';

/**
 * A type of view that loads the next set of data in batches.
 *
 * This kind of state is useful for views that don't need the total
 * count and instead load more data when requested.  You can use this
 * to implement infinite scrolling.
 *
 * @param source -
 *        The data source to load from.
 *
 * @param template -
 *        The template request.  The page size will be used as
 *        the batch size.  The page to load will be ignored and
 *        will instead be controlled by this hook.
 *
 * @returns
 *        The current view, last result, page number, and batch size.
 *        Also returns the method to load the next batch.
 */
export function useMoreViewState<T = any>(source: IZDataSource<T>, template: IZDataRequest) {
  const [view, setView] = useState<T[]>([]);
  const [last, setLast] = useState<ZAsyncDataState<T>>(ZAsyncLoading);
  const nextRequest = useRef(new ZDataRequestBuilder().copy(template).page(1).build());
  const _count = useRef<Promise<number> | null>(null);
  const subscription = useRef<Subscription>();

  const _loadMore = (loaded: number) => {
    subscription.current?.unsubscribe();
    subscription.current = defer(() => {
      _count.current = _count.current || source.count(nextRequest.current);
      setLast(ZAsyncLoading);
      return from(_count.current);
    })
      .pipe(
        mergeMap((count) => {
          return count === loaded ? EMPTY : from(source.retrieve(nextRequest.current));
        })
      )
      .subscribe({
        next: (page) => {
          nextRequest.current = new ZDataRequestBuilder()
            .copy(nextRequest.current)
            .page(nextRequest.current.page! + 1)
            .build();

          setView((v) => v.concat(page));
        },
        error: (e) => {
          _count.current = null;
          setLast(e instanceof Error ? e : new Error(e));
        }
      });
  };

  const reset = () => {
    nextRequest.current = new ZDataRequestBuilder().copy(template).page(1).build();
    setView([]);
    _loadMore(0);
  };

  useEffect(() => {
    reset();
    return () => subscription.current?.unsubscribe();
  }, [source, template.filter, template.size, template.sort, template.search]);

  return {
    view,
    last,
    page: nextRequest.current.page!,
    size: nextRequest.current.size || Infinity,
    more: () => _loadMore(view.length),
    reset
  };
}
