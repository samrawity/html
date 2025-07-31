import Button from '@/components/ui/Button';
import Link from 'next/link';
import MapView from '@/components/map/MapView';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🎯 MeetPoint
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trouvez le point de rencontre parfait entre plusieurs personnes !
          </p>
        </div>

        {/* Actions principales */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Link href="/create">
            <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg">
              🚀 Créer une session
            </Button>
          </Link>
          
          <Link href="/join">
            <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-lg">
              👥 Rejoindre une session
            </Button>
          </Link>
        </div>

        {/* Démo carte */}
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
            Comment ça marche ?
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <MapView 
              center={[48.8566, 2.3522]} 
              zoom={12}
              markers={[
                {
                  id: '1',
                  position: [48.8566, 2.3522],
                  label: 'Point de rencontre optimal 🎯'
                },
                {
                  id: '2',
                  position: [48.8700, 2.3500],
                  label: 'Personne 1 📍'
                },
                {
                  id: '3',
                  position: [48.8400, 2.3600],
                  label: 'Personne 2 📍'
                }
              ]}
            />
          </div>
        </div>

        {/* Explication */}
        <div className="text-center">
          <p className="text-gray-600">
            ✨ Chaque personne ajoute sa position, MeetPoint trouve automatiquement le meilleur endroit pour se retrouver !
          </p>
        </div>

      </div>
    </main>
  );
}
