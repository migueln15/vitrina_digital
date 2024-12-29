'use client'

import { useState } from 'react'
import { Check, AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/Button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select"

interface Location {
  id: string
  name: string
  address: string
  schedule: string
  available: boolean
  availabilityMessage: string
}

const locations: Location[] = [
  {
    id: '1',
    name: 'Carsa Huaycan',
    address: 'Lote 9 Zona B Av. Jose Carlos Mariategui, Ate, Lima - 150103',
    schedule: 'Lunes a Domingo 9 am a 9 pm',
    available: true,
    availabilityMessage: 'Todos tus productos están disponibles para retirar en este punto.'
  },
  {
    id: '2',
    name: 'Carsa Manchay',
    address: '36 Calle No. 36 Mz, Pachacamac, Lima - 150123',
    schedule: 'Lunes a Domingo de 11 am a 8 pm',
    available: false,
    availabilityMessage: 'Algunos de tus productos no estan disponibles para retiro.'
  }
]

export default function StoreLocations() {
  const [department, setDepartment] = useState('Lima')
  const [province, setProvince] = useState('Lima')
  const [district, setDistrict] = useState('Ate')

  return (
    <div className="space-y-4 sm:space-y-6">
      <h2 className="text-lg sm:text-xl font-semibold">Selecciona tu punto de retiro</h2>
      <p className="text-sm sm:text-base text-gray-600">
        Elige el departamento y provincia para consultar los punto de retiro disponibles
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Departamento*
          </label>
          <Select value={department} onValueChange={setDepartment}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Lima">Lima</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Provincia*
          </label>
          <Select value={province} onValueChange={setProvince}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Lima">Lima</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Distrito
          </label>
          <Select value={district} onValueChange={setDistrict}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Ate">Ate</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4 mt-6">
        {locations.map((location) => (
          <div key={location.id} className="border rounded-lg p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
              <div>
                <h3 className="font-medium text-gray-900 text-sm sm:text-base">{location.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">{location.address}</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">{location.schedule}</p>
                <div className="flex items-center gap-2 mt-2">
                  {location.available ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                  )}
                  <span className="text-xs sm:text-sm text-gray-600">
                    {location.availabilityMessage}
                  </span>
                </div>
              </div>
              <div className="flex flex-row sm:flex-col gap-2 justify-end">
                <Button variant="outline" size="sm" className="text-xs sm:text-sm px-2 sm:px-4">
                  Ver fechas
                </Button>
                <Button size="sm" className="text-xs sm:text-sm px-2 sm:px-4">
                  Seleccionar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

