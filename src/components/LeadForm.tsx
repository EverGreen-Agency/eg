'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/animations'

interface LeadFormProps {
  title?: string
  subtitle?: string
  buttonText?: string
  onSubmit?: (data: LeadFormData) => void
  className?: string
  variant?: 'default' | 'minimal'
}

export interface LeadFormData {
  name: string
  email: string
  role: string
  acceptedTerms: boolean
}

interface FormErrors {
  name?: string
  email?: string
  role?: string
  acceptedTerms?: string
}

export default function LeadForm({
  title = 'Inscreva-se Gratuitamente',
  subtitle,
  buttonText = 'Receber Newsletter',
  onSubmit,
  className = '',
  variant = 'default'
}: LeadFormProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    role: '',
    acceptedTerms: false
  })

  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = () => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }
    
    if (!formData.role) {
      newErrors.role = 'Cargo é obrigatório'
    }
    
    if (!formData.acceptedTerms) {
      newErrors.acceptedTerms = 'Você precisa aceitar os termos'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      onSubmit?.(formData)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name as keyof LeadFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }))
    if (errors.acceptedTerms) {
      setErrors(prev => ({
        ...prev,
        acceptedTerms: undefined
      }))
    }
  }

  return (
    <motion.div 
      variants={fadeInUp}
      className={`${className} ${variant === 'default' ? 'glass-card p-8' : ''}`}
    >
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nome completo
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-eg-green focus:border-transparent`}
            placeholder="Seu nome"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email profissional
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-eg-green focus:border-transparent`}
            placeholder="seu@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cargo
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.role ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-eg-green focus:border-transparent`}
          >
            <option value="">Selecione seu cargo</option>
            <option value="ceo">CEO / Fundador</option>
            <option value="marketing">Marketing</option>
            <option value="sales">Vendas</option>
            <option value="tech">Tecnologia</option>
            <option value="other">Outro</option>
          </select>
          {errors.role && (
            <p className="mt-1 text-sm text-red-500">{errors.role}</p>
          )}
        </div>

        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleCheckboxChange}
              className={`rounded border-gray-300 text-eg-green focus:ring-eg-green ${
                errors.acceptedTerms ? 'border-red-500' : ''
              }`}
            />
            <span className="text-sm text-gray-600">
              Aceito receber comunicações da Evergreen
            </span>
          </label>
          {errors.acceptedTerms && (
            <p className="mt-1 text-sm text-red-500">{errors.acceptedTerms}</p>
          )}
        </div>

        <button type="submit" className="btn-primary w-full">
          {buttonText}
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-4 text-center">
        Você pode cancelar sua inscrição a qualquer momento.
        Leia nossa <a href="/legal" className="text-eg-green hover:underline">Política de Privacidade</a>.
      </p>
    </motion.div>
  )
} 