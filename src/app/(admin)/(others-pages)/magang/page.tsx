import React from 'react'
import PageBreadcrumb from '@/components/common/PageBreadCrumb'
import ComponentCard from '@/components/common/ComponentCard'
import ListMagang from '@/components/magang/ListMagang'

export default function Magang() {
  return (
     <div>
      <PageBreadcrumb pageTitle="Magang" />
      <div className="space-y-6">
        <ComponentCard title="Daftar Magang">
          <ListMagang />
        </ComponentCard>
      </div>
    </div>
  )
}