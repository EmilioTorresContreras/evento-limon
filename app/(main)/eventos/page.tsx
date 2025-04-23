'use client';

import { useState } from 'react';
import Modal from '../../../components/Modal';
import EventForm from '../../../components/EventForm';
import Alert from '../../../components/Alert';
import EventsTable from '../../../components/EventsTable';
import { Id } from '../../../../convex/_generated/dataModel';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEventId, setCurrentEventId] = useState<Id<"events"> | undefined>(undefined);
  const [alert, setAlert] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>( {
    show: false,
    type: 'success',
    message: '',
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (isEditing) {
      setIsEditing(false);
      setCurrentEventId(undefined);
    }
  };

  const showAlert = (type: 'success' | 'error', message: string) => {
    setAlert({
      show: true,
      type,
      message,
    });
  };

  const hideAlert = () => {
    setAlert((prev) => ({ ...prev, show: false }));
  };

  const handleSuccess = (message: string) => {
    showAlert('success', message);
  };

  const handleError = (message: string) => {
    showAlert('error', message);
  };

  const handleUpdate = (eventId: Id<"events">) => {
    setIsEditing(true);
    setCurrentEventId(eventId);
    openModal();
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#F5F3EB] p-4 md:p-8">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#2d957e]">Registro de Eventos</h1>

        <div className="flex justify-end mb-6">
          <button
            onClick={openModal}
            className="cursor-pointer font-semibold bg-[#e8da89] hover:bg-[#2d957e] text-[#2d957e] hover:text-white py-2 px-6 rounded-lg transition-all duration-300 ease-in-out "
          >
            Crear Nuevo Evento
          </button>
        </div>

        {/* Tabla de eventos */}
        <EventsTable 
          onSuccess={handleSuccess}
          onError={handleError}
          onEdit={handleUpdate}
        />
        
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <EventForm
              onCancel={closeModal}
              onSave={closeModal}
              onSuccess={handleSuccess}
              onError={handleError}
              eventId={currentEventId}
              isUpdate={isEditing}
            />
          </Modal>
        )}

        {alert.show && (
          <Alert
            type={alert.type}
            message={alert.message}
            onClose={hideAlert}
          />
        )}
      </div>
    </main>
  );
}
