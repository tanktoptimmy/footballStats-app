"use client";
import { useState } from "react";
import { Tabs } from '@/components';
export default function League({  }) {

  const tabs = ['Results', 'Fixtures', 'Table', 'Form', 'BTTS', 'FTRBTTS', 'Shots on Target', 'Referee'];
  const [selectedTab, setSelectedTab] = useState('Results');
  return (
    <>
      <Tabs tabs={tabs} selected={selectedTab} onClick={setSelectedTab} />
    </>
  );
}
