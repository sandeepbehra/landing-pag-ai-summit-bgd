'use client'
import GTMService from '@/services/GTMService';
import { useLayoutEffect } from 'react'


export default function RouteHandler({eventName}) {
  useLayoutEffect(() => {
      const handleRouteChange = () => {
          GTMService.triggerEvent(eventName, {
            pathname: window.location.href,
          });
        };

        handleRouteChange();
  }, [])

  return <></>
}
