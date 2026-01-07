import React from 'react'
import PageBreadcrumb from '@/components/common/PageBreadCrumb'
import ComponentCard from '@/components/common/ComponentCard'
import ListCalonKaryawan from '@/components/calon-karyawan/ListCalonKaryawan'

export default function CalonKaryawan() {
  return (
     <div>
      <PageBreadcrumb pageTitle="Calon Karyawan" />
      <div className="space-y-6">
        <ComponentCard title="Daftar Calon Karyawan">
          <ListCalonKaryawan />
        </ComponentCard>
      </div>
    </div>
  )
}
