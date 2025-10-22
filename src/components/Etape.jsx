import React from 'react';

export default function Etape({ instructions, onBack }) {
  return (
    <div className="p-6 bg-white rounded shadow-md w-full max-w-md mx-auto mt-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Instructions</h2>
      <p className="mb-6 text-lg">{instructions}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        onClick={onBack}
      >
        Retour à l'arbre
      </button>
    </div>
  );
}
