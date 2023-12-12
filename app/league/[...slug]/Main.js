"use client"
import { useState } from 'react';
import { Tabs, Results, Fixtures, League } from '@/components';
import { resultedEvents, fixtureEvents } from '@/helpers'

export default function Main({ events }) {
  const tabs = ["Results", "Fixtures", "Table", ]
  const [selectedTab, setSelectedTab] = useState("Results");
  return (
    <main>
      <Tabs tabs={tabs} selected={selectedTab} onClick={setSelectedTab}/>
      {selectedTab === "Results" ? (
          <Results events={resultedEvents(events)}/>
        ) : null
      }
      {selectedTab === "Fixtures" ? (
          <Fixtures events={fixtureEvents(events)}/>
        ) : null
      }
      {selectedTab === "Table" ? (
          <League events={resultedEvents(events)}/>
        ) : null
      }
    </main>
  )
}