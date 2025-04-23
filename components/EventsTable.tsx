'use client';

import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { formatDate } from "../lib/utils";
import { Id } from "../convex/_generated/dataModel";


interface EventFormProps {
  onSuccess: (message: string) => void;
  onError: (message: string) => void;
  onEdit: (eventId: Id<"events">) => void;
}

export default function EventsTable({ onSuccess, onError, onEdit }: EventFormProps) {
  const events = useQuery(api.events.list) || [];
  const deleteForm = useMutation(api.events.deleteForm)


  const handleDelete = async ({ eventId }: { eventId: Id<"events"> }) => {
    console.log(eventId)
    try {
      await deleteForm({ id: eventId })
      onSuccess('Se elimino el evento correctamente');

    } catch (error) {
      onError('Hubo un error al eliminar un evento')
      console.log('Error: ', error);

    }

  };

  if (!events || events.length === 0) {
    return (
      <div className="mt-8 text-center p-8 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-500">No hay eventos registrados. ¡Crea tu primer evento!</p>
      </div>
    );
  }

  return (
    <div className="mt-8 overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ubicación
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Participantes
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Descripción
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {events.map((event) => (
            <tr key={event._id} className="hover:bg-gray-50">
              <td className="py-4 px-4 text-sm font-medium text-gray-900">
                {event.name}
              </td>
              <td className="py-4 px-4 text-sm text-gray-500">
                {formatDate(event.date)}
              </td>
              <td className="py-4 px-4 text-sm text-gray-500">
                {event.location}
              </td>
              <td className="py-4 px-4 text-sm text-gray-500">
                {event.participants}
              </td>
              <td className="py-4 px-4 text-sm text-gray-500">
                <div className="max-w-xs truncate">
                  {event.description}
                </div>
              </td>
              <td className="py-4 px-4 text-sm text-gray-500">
                <div className="max-w-xs truncate">
                  <button
                    onClick={() => handleDelete({ eventId: event._id })}
                    className={`bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none cursor-pointer `}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                  </button>
                  <button
                    onClick={() => onEdit(event._id)}
                    className={`bg-[#E8DA89] hover:bg-[#FDD670] text-white px-4 py-2 mx-5 my-5 rounded-md focus:outline-none cursor-pointer `}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>

                  </button>
                </div>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
