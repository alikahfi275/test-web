import React from 'react'
import PageBreadcrumb from '@/components/common/PageBreadCrumb'
import ComponentCard from '@/components/common/ComponentCard'
import ListKaryawan from '@/components/karyawan/ListKaryawan'

export default function Karyawan() {
  return (
     <div>
      <PageBreadcrumb pageTitle="Karyawan" />
      <div className="space-y-6">
        <ComponentCard title="Daftar Karyawan">
          <ListKaryawan />
        </ComponentCard>
      </div>
    </div>
  )
}