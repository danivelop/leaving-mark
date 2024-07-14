'use client'
import { useEffect } from 'react';

import { useTheme } from "next-themes"
import { Button } from '@/components/ui/button'

function Navigation() {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('dark')
  }, [setTheme])
  
  return <Button variant="secondary">Button</Button>;
}

export default Navigation;