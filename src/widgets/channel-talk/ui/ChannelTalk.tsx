'use client';

import * as ChannelService from '@channel.io/channel-web-sdk-loader';
import { useEffect } from 'react';

import { useStore } from '@/store';

function ChannelTalk() {
  const isDarkMode = useStore((state) => state.themeSlice.isDarkMode);

  useEffect(() => {
    ChannelService.loadScript();
    ChannelService.boot({
      pluginKey: '758ea147-079f-40d0-a1a2-6ceb5dca2628',
    });
  }, []);

  useEffect(() => {
    ChannelService.setAppearance(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return null;
}

export default ChannelTalk;
