export interface Stat {
  value: number
  suffix: string
  label: string
  sublabel: string
}

export const stats: Stat[] = [
  { value: 850, suffix: '+', label: 'Families', sublabel: 'Housed' },
  { value: 12, suffix: '+', label: 'Years', sublabel: 'Experience' },
  { value: 4, suffix: '+', label: 'Projects', sublabel: 'Delivered' },
  { value: 98, suffix: '%', label: 'Satisfaction', sublabel: 'Rate' },
]
