export type PetStatus = 'SEARCHING' | 'FOUND' | 'CLOSED'

export interface Pet {
  id: number
  name: string
  type: string
  location: string
  lostDate: string
  description: string
  status: PetStatus
}