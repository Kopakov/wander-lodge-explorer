
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          id: number
          created_at: string
          user_id: string
          property_id: number
          check_in: string
          check_out: string
          total_price: number
          status: 'pending' | 'confirmed' | 'cancelled'
        }
        Insert: {
          id?: number
          created_at?: string
          user_id: string
          property_id: number
          check_in: string
          check_out: string
          total_price: number
          status?: 'pending' | 'confirmed' | 'cancelled'
        }
        Update: {
          id?: number
          created_at?: string
          user_id?: string
          property_id?: number
          check_in?: string
          check_out?: string
          total_price?: number
          status?: 'pending' | 'confirmed' | 'cancelled'
        }
      }
      properties: {
        Row: {
          id: number
          created_at: string
          title: string
          description: string
          location: string
          price_per_night: number
          images: string[]
          amenities: string[]
          host_id: string
          latitude: number
          longitude: number
        }
        Insert: {
          id?: number
          created_at?: string
          title: string
          description: string
          location: string
          price_per_night: number
          images: string[]
          amenities: string[]
          host_id: string
          latitude: number
          longitude: number
        }
        Update: {
          id?: number
          created_at?: string
          title?: string
          description?: string
          location?: string
          price_per_night?: number
          images?: string[]
          amenities?: string[]
          host_id?: string
          latitude?: number
          longitude?: number
        }
      }
      saved_properties: {
        Row: {
          id: number
          created_at: string
          user_id: string
          property_id: number
        }
        Insert: {
          id?: number
          created_at?: string
          user_id: string
          property_id: number
        }
        Update: {
          id?: number
          created_at?: string
          user_id?: string
          property_id?: number
        }
      }
      profiles: {
        Row: {
          id: string
          created_at: string
          full_name: string
          avatar_url: string | null
          is_host: boolean
        }
        Insert: {
          id: string
          created_at?: string
          full_name: string
          avatar_url?: string | null
          is_host?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          full_name?: string
          avatar_url?: string | null
          is_host?: boolean
        }
      }
    }
  }
}
