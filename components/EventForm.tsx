'use client';

import { useEffect, useState } from 'react';
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { Id } from '../convex/_generated/dataModel';

interface EventFormProps {
  onCancel: () => void;
  onSave: () => void;
  onSuccess: (message: string) => void;
  onError: (message: string) => void;
  isUpdate?: boolean;
  eventId?: Id<"events">;
}

export default function EventForm({ onCancel, onSave, onSuccess, onError, isUpdate, eventId }: EventFormProps) {
  const createEvent = useMutation(api.events.create);
  const updateEvent = useMutation(api.events.update);
  const existingEvent = useQuery(api.events.get, eventId ? { id: eventId } : "skip");

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: '',
    description: '',
    participants: 0,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Cargar datos del evento si es una actualización
  useEffect(() => {
    if (isUpdate && existingEvent) {
      setFormData({
        name: existingEvent.name,
        date: existingEvent.date,
        location: existingEvent.location,
        description: existingEvent.description,
        participants: existingEvent.participants,
      });
    }
  }, [isUpdate, existingEvent]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'participants' ? parseInt(value) || 0 : value
    }));

    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre del evento es obligatorio';
    }

    if (!formData.date) {
      newErrors.date = 'La fecha es obligatoria';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'La ubicación es obligatoria';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es obligatoria';
    }

    if (formData.participants <= 0) {
      newErrors.participants = 'El número de participantes debe ser mayor a 0';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);
      // Enviar datos a Convex


      if (isUpdate && eventId) {
        // Actualizar evento existente
        await updateEvent({
          id: eventId,
          ...formData
        });
        onSuccess('Evento actualizó exitosamente')
        onSave();
      } else {
        await createEvent(formData);
        onSuccess('Evento guardado exitosamente')
        onSave();
      }
    } catch (error) {
      console.error('Error al guardar el evento:', error);
      onError(isUpdate 
        ? "Hubo un problema al actualizar el evento. Por favor intenta nuevamente." 
        : "Hubo un problema al guardar el evento. Por favor intenta nuevamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mostrar cargando mientras se obtienen los datos del evento
  if (isUpdate && !existingEvent && eventId) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">{isUpdate ? 'Actualizar Evento' : 'Registro de Evento'}</h2>
      

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre del Evento
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Fiesta de cumpleaños"
          disabled={isSubmitting}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
          Fecha
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
          disabled={isSubmitting}
        />
        {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
          Ubicación
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md ${errors.location ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Ciudad, Salón de eventos"
          disabled={isSubmitting}
        />
        {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Descripción
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          className={`w-full px-3 py-2 border rounded-md ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Detalles sobre el evento..."
          disabled={isSubmitting}
        />
        {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="participants" className="block text-sm font-medium text-gray-700 mb-1">
          Número de Participantes
        </label>
        <input
          type="number"
          id="participants"
          name="participants"
          value={formData.participants || ''}
          onChange={handleChange}
          min="1"
          className={`w-full px-3 py-2 border rounded-md ${errors.participants ? 'border-red-500' : 'border-gray-300'}`}
          disabled={isSubmitting}
        />
        {errors.participants && <p className="mt-1 text-sm text-red-600">{errors.participants}</p>}
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
          disabled={isSubmitting}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Guardando...' : 'Guardar'}
        </button>
      </div>
    </form>
  );
}
