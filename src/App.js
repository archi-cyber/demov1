import React, { useState } from 'react';

// Icônes simplifiées
const Icon = ({ name, size = 20 }) => {
  const icons = {
    home: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>,
    users: <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>,
    file: <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>,
    calendar: <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>,
    factory: <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>,
    package: <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>,
    wrench: <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>,
    clock: <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>,
    truck: <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/>,
    alert: <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>,
    trend: <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>,
    refresh: <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>,
    building: <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>,
    chart: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>,
    settings: <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>,
    menu: <path d="M4 6h16M4 12h16M4 18h16"/>,
    x: <path d="M6 18L18 6M6 6l12 12"/>,
    plus: <path d="M12 4v16m8-8H4"/>,
    edit: <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>,
    check: <path d="M5 13l4 4L19 7"/>,
    search: <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>,
    left: <path d="M15 19l-7-7 7-7"/>,
    right: <path d="M9 5l7 7-7 7"/>,
    save: <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/>,
    logout: <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>,
    bell: <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>,
    camera: <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>,
    map: <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>,
    mail: <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>,
    cart: <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>,
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[name]}
    </svg>
  );
};

export default function RampesGardexApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedCommande, setSelectedCommande] = useState(null);
  const [productionTab, setProductionTab] = useState('calendrier');
  const [commandeTab, setCommandeTab] = useState('actives');
  const [attenteTab, setAttenteTab] = useState('clients');
  const [statsPeriode, setStatsPeriode] = useState('hebdomadaire');

  // === DONNÉES ===
  const [commandes, setCommandes] = useState([
    { id: 1, num: 'CMD-2024-001', client: 'Construction Leblanc', representant: 'Marc Dupont', type: 'Standard', statut: 'Active', dateInstallation: '2026-01-28', heuresEstimees: 6, heuresReelles: null, notes: 'Rampe aluminium 12 pieds', enProduction: true, productionTerminee: false, adresse: '123 Rue Principale, Montréal', equipe: 'Équipe A' },
    { id: 2, num: 'CMD-2024-002', client: 'Rénovations ABC', representant: 'Julie Tremblay', type: 'Commercial', statut: 'Active', dateInstallation: '2026-01-29', heuresEstimees: 12, heuresReelles: null, notes: 'Projet commercial - 3 rampes', enProduction: true, productionTerminee: false, adresse: '456 Boul. St-Laurent, Laval', equipe: 'Équipe B' },
    { id: 3, num: 'CMD-2024-003', client: 'Gestion Immobilière XYZ', representant: 'Pierre Roy', type: 'Multi-phases', statut: 'Active', dateInstallation: '2026-01-30', heuresEstimees: 24, heuresReelles: null, notes: 'Multi-logements - Phase 1', enProduction: false, productionTerminee: false, adresse: '789 Ave du Parc, Longueuil', equipe: null },
    { id: 4, num: 'CMD-2024-004', client: 'Résidence Soleil', representant: 'Marc Dupont', type: 'Standard', statut: 'Complétée', dateInstallation: '2026-01-20', heuresEstimees: 4, heuresReelles: 5, notes: 'Installation complétée', enProduction: false, productionTerminee: true, dateCompletion: '2026-01-20', adresse: '321 Rue du Soleil, Brossard', equipe: 'Équipe A' },
    { id: 5, num: 'CMD-2024-005', client: 'Centre Médical Plus', representant: 'Julie Tremblay', type: 'Commercial', statut: 'Complétée', dateInstallation: '2026-01-18', heuresEstimees: 8, heuresReelles: 7, notes: 'Projet terminé sous budget', enProduction: false, productionTerminee: true, dateCompletion: '2026-01-18', adresse: '654 Boul. Santé, Terrebonne', equipe: 'Équipe C' },
  ]);

  const [inventaire] = useState([
    { id: 1, produit: 'Aluminium 6063-T5', quantite: 150, seuil: 50, unite: 'pieds', fournisseur: 'Alu-Québec' },
    { id: 2, produit: 'Vis inox #10', quantite: 2500, seuil: 500, unite: 'unités', fournisseur: 'Fasteners Pro' },
    { id: 3, produit: 'Poteaux 2"x2"', quantite: 45, seuil: 100, unite: 'unités', fournisseur: 'Alu-Québec' },
    { id: 4, produit: 'Main courante ronde', quantite: 80, seuil: 30, unite: 'pieds', fournisseur: 'Rampes Canada' },
  ]);

  const [nonConformites] = useState([
    { id: 1, commande: 'CMD-2024-001', description: 'Mauvaise couleur commandée', departement: 'Ventes', date: '2026-01-15', statut: 'Ouvert' },
    { id: 2, commande: 'CMD-2024-002', description: 'Mesures incorrectes', departement: 'Production', date: '2026-01-12', statut: 'Résolu' },
  ]);

  const [attentes] = useState({
    clients: [
      { id: 1, client: 'Construction Leblanc', raison: 'Attente confirmation couleur', depuis: '2026-01-18', representant: 'Marc Dupont' },
      { id: 2, client: 'Rénovations ABC', raison: 'Attente paiement dépôt', depuis: '2026-01-15', representant: 'Julie Tremblay' },
    ],
    representants: [
      { id: 1, representant: 'Marc Dupont', commande: 'CMD-2024-003', raison: 'Besoin mesures finales', depuis: '2026-01-17' },
    ]
  });

  const [delais] = useState([
    { id: 1, fournisseur: 'Alu-Québec', produit: 'Aluminium spécial noir', delaiInitial: '2026-01-20', nouveauDelai: '2026-01-28', raison: 'Rupture de stock' },
    { id: 2, fournisseur: 'Fasteners Pro', produit: 'Vis spéciales marine', delaiInitial: '2026-01-22', nouveauDelai: '2026-01-25', raison: 'Transport retardé' },
  ]);

  const [cueillettes, setCueillettes] = useState([
    { id: 1, type: 'Cueillette', commande: 'CMD-2024-001', client: 'Construction Leblanc', adresse: '123 Rue Principale, Montréal', date: '2026-01-23', heure: '09:00', statut: 'Planifiée', chauffeur: 'Jean Fortin', vehicule: 'Camion #1', notes: 'Rampe usagée à récupérer' },
    { id: 2, type: 'Livraison', commande: 'CMD-2024-002', client: 'Rénovations ABC', adresse: '456 Boul. St-Laurent, Laval', date: '2026-01-23', heure: '13:30', statut: 'En cours', chauffeur: 'Pierre Gagnon', vehicule: 'Camion #2', notes: 'Livraison matériaux' },
    { id: 3, type: 'Transport', commande: 'CMD-2024-003', client: 'Gestion Immobilière XYZ', adresse: '789 Ave du Parc, Longueuil', date: '2026-01-24', heure: '08:00', statut: 'Planifiée', chauffeur: 'Jean Fortin', vehicule: 'Camion #1', notes: 'Transport équipe installation' },
    { id: 4, type: 'Cueillette', commande: 'CMD-2024-004', client: 'Résidence Soleil', adresse: '321 Rue du Soleil, Brossard', date: '2026-01-22', heure: '10:00', statut: 'Complétée', chauffeur: 'Pierre Gagnon', vehicule: 'Camion #2', notes: 'Ancienne rampe récupérée' },
  ]);

  const [vehicules] = useState([
    { id: 1, nom: 'Camion #1', type: 'Camion cube 16 pieds', plaque: 'ABC 123', statut: 'Disponible' },
    { id: 2, nom: 'Camion #2', type: 'Camion cube 20 pieds', plaque: 'XYZ 789', statut: 'En route' },
    { id: 3, nom: 'Fourgonnette #1', type: 'Ford Transit', plaque: 'QWE 456', statut: 'Disponible' },
  ]);

  const [chauffeurs] = useState([
    { id: 1, nom: 'Jean Fortin', telephone: '514-555-1111', permis: 'Classe 5', statut: 'Actif' },
    { id: 2, nom: 'Pierre Gagnon', telephone: '514-555-2222', permis: 'Classe 3', statut: 'En livraison' },
    { id: 3, nom: 'Marc Bouchard', telephone: '514-555-3333', permis: 'Classe 5', statut: 'Congé' },
  ]);

  const clients = [
    { id: 1, nom: 'Construction Leblanc', contact: 'Jean Leblanc', telephone: '514-555-0101', email: 'jean@leblanc.ca', commandes: 5 },
    { id: 2, nom: 'Rénovations ABC', contact: 'Marie Côté', telephone: '450-555-0202', email: 'marie@abc-reno.ca', commandes: 3 },
    { id: 3, nom: 'Gestion Immobilière XYZ', contact: 'Robert Martin', telephone: '514-555-0303', email: 'robert@xyz-immo.ca', commandes: 8 },
  ];

  const menuItems = [
    { id: 'dashboard', icon: 'home', label: 'Tableau de bord' },
    { id: 'clients', icon: 'users', label: 'Clients' },
    { id: 'commandes', icon: 'file', label: 'Commandes' },
    { id: 'production', icon: 'factory', label: 'Production' },
    { id: 'planification', icon: 'calendar', label: 'Planification' },
    { id: 'installations', icon: 'wrench', label: 'Installations' },
    { id: 'cueillettes', icon: 'truck', label: 'Cueillettes / Transport' },
    { id: 'inventaire', icon: 'package', label: 'Inventaire' },
    { id: 'achats', icon: 'cart', label: 'Achats' },
    { id: 'rentabilite', icon: 'trend', label: 'Rentabilité' },
    { id: 'attentes', icon: 'alert', label: 'Attentes' },
    { id: 'delais', icon: 'clock', label: 'Délais de livraison' },
    { id: 'nonconformites', icon: 'alert', label: 'Non-conformités' },
    { id: 'multilogements', icon: 'building', label: 'Multi-logements' },
    { id: 'reprises', icon: 'refresh', label: 'Reprises' },
    { id: 'rapports', icon: 'chart', label: 'Rapports' },
    { id: 'parametres', icon: 'settings', label: 'Paramètres' },
  ];

  // === FONCTIONS ===
  const completeCommande = (id) => {
    setCommandes(prev => prev.map(cmd => 
      cmd.id === id ? { ...cmd, statut: 'Complétée', dateCompletion: '2026-01-22' } : cmd
    ));
  };

  const toggleProduction = (id) => {
    setCommandes(prev => prev.map(cmd => 
      cmd.id === id ? { ...cmd, enProduction: !cmd.enProduction } : cmd
    ));
  };

  const finaliserProduction = (id) => {
    setCommandes(prev => prev.map(cmd => 
      cmd.id === id ? { ...cmd, productionTerminee: true, enProduction: false } : cmd
    ));
  };

  // === ÉCRAN CONNEXION ===
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md">
          <div className="text-center mb-10">
            <div className="inline-block bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-black text-2xl py-4 px-8 rounded-xl shadow-lg mb-6">
              RAMPES GARDEX
            </div>
            <p className="text-slate-500">Système de gestion interne</p>
          </div>
          <div className="space-y-5">
            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-2">Courriel</label>
              <input type="email" className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-amber-400" placeholder="utilisateur@rampesgardex.com"/>
            </div>
            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-2">Mot de passe</label>
              <input type="password" className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-amber-400" placeholder="••••••••"/>
            </div>
            <button onClick={() => setIsLoggedIn(true)} className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-900 font-bold py-4 rounded-xl transition-all shadow-lg">
              Se connecter
            </button>
          </div>
        </div>
      </div>
    );
  }

  // === TABLEAU DE BORD ===
  const Dashboard = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Tableau de bord</h1>
        <p className="text-slate-500 mt-1">Vue d'ensemble de vos opérations</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div onClick={() => setCurrentScreen('commandes')} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium">Commandes actives</p>
              <p className="text-4xl font-bold text-slate-800 mt-3">{commandes.filter(c => c.statut === 'Active').length}</p>
              <p className="text-xs text-amber-600 font-medium mt-2">Cliquez pour voir →</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl"><Icon name="file" size={28}/></div>
          </div>
        </div>

        <div onClick={() => setCurrentScreen('installations')} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium">Installations aujourd'hui</p>
              <p className="text-4xl font-bold text-slate-800 mt-3">3</p>
              <p className="text-xs text-blue-600 font-medium mt-2">Voir le calendrier →</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-xl text-blue-500"><Icon name="wrench" size={28}/></div>
          </div>
        </div>

        <div onClick={() => setCurrentScreen('production')} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium">Production en cours</p>
              <p className="text-4xl font-bold text-slate-800 mt-3">{commandes.filter(c => c.enProduction).length}</p>
              <p className="text-xs text-emerald-600 font-medium mt-2">Gérer la production →</p>
            </div>
            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-500"><Icon name="factory" size={28}/></div>
          </div>
        </div>

        <div onClick={() => setCurrentScreen('inventaire')} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium">Alertes matériel</p>
              <p className="text-4xl font-bold text-slate-800 mt-3">{inventaire.filter(i => i.quantite <= i.seuil).length}</p>
              <p className="text-xs text-red-600 font-medium mt-2">Vérifier l'inventaire →</p>
            </div>
            <div className="p-3 bg-red-50 rounded-xl text-red-500"><Icon name="alert" size={28}/></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Prochaines installations</h2>
          <div className="space-y-3">
            {commandes.filter(c => c.statut === 'Active').slice(0, 3).map(cmd => (
              <div key={cmd.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <div>
                  <p className="font-semibold text-slate-800">{cmd.client}</p>
                  <p className="text-sm text-slate-500">{cmd.num}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-700">{cmd.dateInstallation}</p>
                  <p className="text-xs text-slate-500">{cmd.equipe || 'Non assigné'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Alertes inventaire</h2>
          <div className="space-y-3">
            {inventaire.filter(i => i.quantite <= i.seuil).map(item => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-red-50 rounded-xl border border-red-100">
                <div>
                  <p className="font-semibold text-slate-800">{item.produit}</p>
                  <p className="text-sm text-slate-500">Fournisseur: {item.fournisseur}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-red-600">{item.quantite}</p>
                  <p className="text-xs text-slate-500">Seuil: {item.seuil}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // === CLIENTS ===
  const Clients = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Gestion des clients</h1>
          <p className="text-slate-500 mt-1">Gérez votre base de clients</p>
        </div>
        <button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg">
          <Icon name="plus" size={20}/>Ajouter client
        </button>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Client</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Contact</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Téléphone</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Commandes</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {clients.map(client => (
              <tr key={client.id} className="hover:bg-slate-50">
                <td className="px-6 py-4">
                  <div className="font-semibold text-slate-800">{client.nom}</div>
                  <div className="text-sm text-slate-500">{client.email}</div>
                </td>
                <td className="px-6 py-4 text-slate-600">{client.contact}</td>
                <td className="px-6 py-4 text-slate-600">{client.telephone}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">{client.commandes}</span>
                </td>
                <td className="px-6 py-4">
                  <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"><Icon name="edit" size={18}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // === COMMANDES ===
  const Commandes = () => {
    if (selectedCommande) {
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <button onClick={() => setSelectedCommande(null)} className="p-2 hover:bg-slate-100 rounded-lg"><Icon name="left" size={24}/></button>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Détail de la commande</h1>
              <p className="text-slate-500 mt-1">{selectedCommande.num}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Client</label>
                <input type="text" defaultValue={selectedCommande.client} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Représentant</label>
                <input type="text" defaultValue={selectedCommande.representant} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Type de commande</label>
                <select defaultValue={selectedCommande.type} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white">
                  <option>Standard</option>
                  <option>Commercial</option>
                  <option>Multi-phases</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Date d'installation prévue</label>
                <input type="date" defaultValue={selectedCommande.dateInstallation} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Heures estimées</label>
                <input type="number" defaultValue={selectedCommande.heuresEstimees} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Adresse</label>
                <input type="text" defaultValue={selectedCommande.adresse} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Notes</label>
                <textarea defaultValue={selectedCommande.notes} rows={3} className="w-full px-4 py-3 border border-slate-200 rounded-xl resize-none"/>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-slate-100">
              <button onClick={() => setSelectedCommande(null)} className="px-6 py-2.5 border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50">Annuler</button>
              <button onClick={() => setSelectedCommande(null)} className="px-6 py-2.5 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold rounded-xl flex items-center gap-2">
                <Icon name="save" size={18}/>Enregistrer
              </button>
            </div>
          </div>
        </div>
      );
    }

    const filteredCommandes = commandes.filter(cmd => commandeTab === 'actives' ? cmd.statut === 'Active' : cmd.statut === 'Complétée');

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Gestion des commandes</h1>
            <p className="text-slate-500 mt-1">Suivez et gérez toutes vos commandes</p>
          </div>
          <button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg">
            <Icon name="plus" size={20}/>Nouvelle commande
          </button>
        </div>

        <div className="flex gap-2 bg-slate-100 p-1 rounded-xl w-fit">
          <button onClick={() => setCommandeTab('actives')} className={`px-5 py-2.5 rounded-lg font-medium transition-all ${commandeTab === 'actives' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
            Actives ({commandes.filter(c => c.statut === 'Active').length})
          </button>
          <button onClick={() => setCommandeTab('completes')} className={`px-5 py-2.5 rounded-lg font-medium transition-all ${commandeTab === 'completes' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
            Complétées ({commandes.filter(c => c.statut === 'Complétée').length})
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex gap-4">
            <div className="relative flex-1">
              <input type="text" placeholder="Rechercher..." className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl"/>
            </div>
            <select className="px-4 py-2.5 border border-slate-200 rounded-xl bg-white">
              <option>Tous les types</option>
              <option>Standard</option>
              <option>Commercial</option>
              <option>Multi-phases</option>
            </select>
          </div>
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">N° Commande</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Client</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">{commandeTab === 'actives' ? 'Date prévue' : 'Date complétée'}</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Statut</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredCommandes.map(cmd => (
                <tr key={cmd.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-mono font-semibold text-slate-800">{cmd.num}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-800">{cmd.client}</div>
                    <div className="text-sm text-slate-500">{cmd.representant}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cmd.type === 'Standard' ? 'bg-blue-100 text-blue-800' : cmd.type === 'Commercial' ? 'bg-purple-100 text-purple-800' : 'bg-orange-100 text-orange-800'}`}>{cmd.type}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{commandeTab === 'actives' ? cmd.dateInstallation : cmd.dateCompletion}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cmd.statut === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>{cmd.statut}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button onClick={() => setSelectedCommande(cmd)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"><Icon name="edit" size={18}/></button>
                      {cmd.statut === 'Active' && <button onClick={() => completeCommande(cmd.id)} className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg"><Icon name="check" size={18}/></button>}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // === PRODUCTION (COMPLET AVEC 3 ONGLETS) ===
  const Production = () => {
    const dayNames = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'];
    const weekDates = ['27', '28', '29', '30', '31'];
    const commandesEnProduction = commandes.filter(c => c.enProduction && !c.productionTerminee);

    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Production</h1>
          <p className="text-slate-500 mt-1">Gérez la production de vos commandes</p>
        </div>

        {/* ONGLETS */}
        <div className="flex gap-2 bg-slate-100 p-1 rounded-xl w-fit">
          <button onClick={() => setProductionTab('calendrier')} className={`px-5 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2 ${productionTab === 'calendrier' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
            <Icon name="calendar" size={18}/>Calendrier
          </button>
          <button onClick={() => setProductionTab('finaliser')} className={`px-5 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2 ${productionTab === 'finaliser' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
            <Icon name="check" size={18}/>Finaliser
          </button>
          <button onClick={() => setProductionTab('statistiques')} className={`px-5 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2 ${productionTab === 'statistiques' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
            <Icon name="chart" size={18}/>Statistiques
          </button>
        </div>

        {/* CALENDRIER */}
        {productionTab === 'calendrier' && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <button className="p-2 hover:bg-slate-100 rounded-lg"><Icon name="left" size={24}/></button>
              <h2 className="text-xl font-bold text-slate-800">Semaine du 27 au 31 janvier 2026</h2>
              <button className="p-2 hover:bg-slate-100 rounded-lg"><Icon name="right" size={24}/></button>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {dayNames.map((day, index) => (
                <div key={day} className={`border rounded-xl p-4 min-h-[200px] ${index === 1 ? 'border-amber-400 bg-amber-50/50' : 'border-slate-200'}`}>
                  <div className="text-center mb-4">
                    <p className="text-sm font-medium text-slate-500">{day}</p>
                    <p className={`text-2xl font-bold ${index === 1 ? 'text-amber-600' : 'text-slate-800'}`}>{weekDates[index]}</p>
                  </div>
                  <div className="space-y-2">
                    {commandes.filter(c => c.statut === 'Active' && c.dateInstallation === `2026-01-${weekDates[index]}`).map(cmd => (
                      <div key={cmd.id} onClick={() => toggleProduction(cmd.id)} className={`p-3 rounded-lg text-sm cursor-pointer transition-all ${cmd.enProduction ? 'bg-emerald-100 border border-emerald-200' : 'bg-slate-100 hover:bg-slate-200'}`}>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" checked={cmd.enProduction} onChange={() => {}} className="w-4 h-4 rounded"/>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-slate-800 truncate">{cmd.num}</p>
                            <p className="text-xs text-slate-500 truncate">{cmd.client}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-4 opacity-50">
              <div className="flex-1 border border-dashed border-slate-300 rounded-xl p-4 text-center">
                <p className="text-slate-400">Samedi - Fermé</p>
              </div>
              <div className="flex-1 border border-dashed border-slate-300 rounded-xl p-4 text-center">
                <p className="text-slate-400">Dimanche - Fermé</p>
              </div>
            </div>
          </div>
        )}

        {/* FINALISER */}
        {productionTab === 'finaliser' && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-4 border-b border-slate-100">
              <input type="text" placeholder="Rechercher une commande en production..." className="w-full px-4 py-2.5 border border-slate-200 rounded-xl"/>
            </div>
            {commandesEnProduction.length === 0 ? (
              <div className="p-12 text-center">
                <p className="text-slate-500">Aucune commande en production</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {commandesEnProduction.map(cmd => (
                  <div key={cmd.id} className="p-4 hover:bg-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div onClick={() => finaliserProduction(cmd.id)} className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center cursor-pointer hover:bg-emerald-200 text-emerald-600">
                        <Icon name="check" size={24}/>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{cmd.num}</p>
                        <p className="text-sm text-slate-500">{cmd.client}</p>
                      </div>
                    </div>
                    <div className="text-right mr-4">
                      <p className="text-sm font-medium text-slate-700">{cmd.type}</p>
                      <p className="text-xs text-slate-500">Installation: {cmd.dateInstallation}</p>
                    </div>
                    <button onClick={() => finaliserProduction(cmd.id)} className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg">
                      Terminer production
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* STATISTIQUES */}
        {productionTab === 'statistiques' && (
          <div className="space-y-6">
            <div className="flex gap-2 bg-white p-1 rounded-xl w-fit border border-slate-200">
              {['journalier', 'hebdomadaire', 'mensuel', 'annuel'].map(p => (
                <button key={p} onClick={() => setStatsPeriode(p)} className={`px-4 py-2 rounded-lg font-medium capitalize ${statsPeriode === p ? 'bg-amber-100 text-amber-800' : 'text-slate-600'}`}>{p}</button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-slate-500 text-sm font-medium">Total commandes</p>
                <p className="text-4xl font-bold text-slate-800 mt-2">{commandes.length}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                <p className="text-slate-500 text-sm font-medium">En production</p>
                <p className="text-4xl font-bold text-emerald-600 mt-2">{commandes.filter(c => c.enProduction).length}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
                <p className="text-slate-500 text-sm font-medium">Production terminée</p>
                <p className="text-4xl font-bold text-blue-600 mt-2">{commandes.filter(c => c.productionTerminee).length}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
                <p className="text-slate-500 text-sm font-medium">En attente</p>
                <p className="text-4xl font-bold text-amber-600 mt-2">{commandes.filter(c => !c.enProduction && !c.productionTerminee && c.statut === 'Active').length}</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-6">Volume de production</h3>
              <div className="h-64 flex items-end justify-around gap-4">
                {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'].map((jour, i) => (
                  <div key={jour} className="flex flex-col items-center gap-2 flex-1">
                    <div className="w-full bg-gradient-to-t from-amber-500 to-amber-300 rounded-t-lg" style={{ height: `${[60, 80, 45, 90, 70][i]}%` }}/>
                    <span className="text-sm font-medium text-slate-600">{jour}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // === PLANIFICATION ===
  const Planification = () => {
    const equipes = ['Équipe A', 'Équipe B', 'Équipe C'];
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Planification</h1>
          <p className="text-slate-500 mt-1">Planifiez les installations et assignez les équipes</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {equipes.map(equipe => (
            <div key={equipe} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-4 bg-slate-50 border-b border-slate-100">
                <h3 className="font-bold text-slate-800">{equipe}</h3>
                <p className="text-sm text-slate-500">{commandes.filter(c => c.equipe === equipe && c.statut === 'Active').length} installation(s)</p>
              </div>
              <div className="p-4 space-y-3">
                {commandes.filter(c => c.equipe === equipe && c.statut === 'Active').map(cmd => (
                  <div key={cmd.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-mono text-sm font-medium text-slate-800">{cmd.num}</span>
                      <span className="text-xs text-slate-500">{cmd.dateInstallation}</span>
                    </div>
                    <p className="text-sm text-slate-600">{cmd.client}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h3 className="font-bold text-slate-800 mb-4">Commandes non planifiées</h3>
          {commandes.filter(c => !c.equipe && c.statut === 'Active').map(cmd => (
            <div key={cmd.id} className="flex items-center justify-between p-4 bg-amber-50 rounded-xl border border-amber-100 mb-3">
              <div>
                <p className="font-medium text-slate-800">{cmd.num} - {cmd.client}</p>
                <p className="text-sm text-slate-500">Date prévue: {cmd.dateInstallation}</p>
              </div>
              <select className="px-4 py-2 border border-slate-200 rounded-lg bg-white">
                <option>Assigner une équipe</option>
                {equipes.map(eq => <option key={eq}>{eq}</option>)}
              </select>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // === INSTALLATIONS ===
  const Installations = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Installations</h1>
          <p className="text-slate-500 mt-1">Suivi des installations terrain</p>
        </div>
        <select className="px-4 py-2.5 border border-slate-200 rounded-xl bg-white">
          <option>Tous les statuts</option>
          <option>Planifiée</option>
          <option>En cours</option>
          <option>Complétée</option>
        </select>
      </div>
      <div className="grid gap-4">
        {commandes.map(inst => (
          <div key={inst.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono font-bold text-slate-800">{inst.num}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${inst.statut === 'Complétée' ? 'bg-emerald-100 text-emerald-800' : inst.equipe ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'}`}>
                    {inst.statut === 'Complétée' ? 'Complétée' : inst.equipe ? 'Planifiée' : 'Non planifiée'}
                  </span>
                </div>
                <p className="text-lg font-medium text-slate-700">{inst.client}</p>
                <p className="text-sm text-slate-500 mt-1">{inst.adresse}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm">
                  <p className="text-slate-500">Équipe</p>
                  <p className="font-medium text-slate-800">{inst.equipe || 'Non assignée'}</p>
                </div>
                <div className="text-sm">
                  <p className="text-slate-500">Date</p>
                  <p className="font-medium text-slate-800">{inst.dateInstallation}</p>
                </div>
                <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg flex items-center gap-2">
                  <Icon name="camera" size={18}/>Photos
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // === CUEILLETTES / TRANSPORT ===
  const Cueillettes = () => {
    const [cueillettesTab, setCueillettesTab] = useState('liste');
    const [filterType, setFilterType] = useState('tous');
    const [filterStatut, setFilterStatut] = useState('tous');

    const filteredCueillettes = cueillettes
      .filter(c => filterType === 'tous' || c.type === filterType)
      .filter(c => filterStatut === 'tous' || c.statut === filterStatut);

    const completeCueillette = (id) => {
      setCueillettes(prev => prev.map(c => c.id === id ? { ...c, statut: 'Complétée' } : c));
    };

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Cueillettes / Transport</h1>
            <p className="text-slate-500 mt-1">Gestion des cueillettes, livraisons et transports</p>
          </div>
          <button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg">
            <Icon name="plus" size={20}/>Nouvelle tâche
          </button>
        </div>

        {/* Onglets */}
        <div className="flex gap-2 bg-slate-100 p-1 rounded-xl w-fit">
          <button onClick={() => setCueillettesTab('liste')} className={`px-5 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2 ${cueillettesTab === 'liste' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
            <Icon name="file" size={18}/>Liste des tâches
          </button>
          <button onClick={() => setCueillettesTab('calendrier')} className={`px-5 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2 ${cueillettesTab === 'calendrier' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
            <Icon name="calendar" size={18}/>Calendrier
          </button>
          <button onClick={() => setCueillettesTab('vehicules')} className={`px-5 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2 ${cueillettesTab === 'vehicules' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
            <Icon name="truck" size={18}/>Véhicules
          </button>
          <button onClick={() => setCueillettesTab('chauffeurs')} className={`px-5 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2 ${cueillettesTab === 'chauffeurs' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
            <Icon name="users" size={18}/>Chauffeurs
          </button>
        </div>

        {/* LISTE DES TÂCHES */}
        {cueillettesTab === 'liste' && (
          <>
            {/* Stats rapides */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-500">Aujourd'hui</p>
                <p className="text-2xl font-bold text-slate-800 mt-1">{cueillettes.filter(c => c.date === '2026-01-22').length}</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-blue-100">
                <p className="text-sm text-slate-500">Cueillettes</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">{cueillettes.filter(c => c.type === 'Cueillette').length}</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-emerald-100">
                <p className="text-sm text-slate-500">Livraisons</p>
                <p className="text-2xl font-bold text-emerald-600 mt-1">{cueillettes.filter(c => c.type === 'Livraison').length}</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-purple-100">
                <p className="text-sm text-slate-500">Transports</p>
                <p className="text-2xl font-bold text-purple-600 mt-1">{cueillettes.filter(c => c.type === 'Transport').length}</p>
              </div>
            </div>

            {/* Filtres */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <input type="text" placeholder="Rechercher..." className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl"/>
                </div>
                <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="px-4 py-2.5 border border-slate-200 rounded-xl bg-white">
                  <option value="tous">Tous les types</option>
                  <option value="Cueillette">Cueillette</option>
                  <option value="Livraison">Livraison</option>
                  <option value="Transport">Transport</option>
                </select>
                <select value={filterStatut} onChange={(e) => setFilterStatut(e.target.value)} className="px-4 py-2.5 border border-slate-200 rounded-xl bg-white">
                  <option value="tous">Tous les statuts</option>
                  <option value="Planifiée">Planifiée</option>
                  <option value="En cours">En cours</option>
                  <option value="Complétée">Complétée</option>
                </select>
              </div>
            </div>

            {/* Tableau */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Type</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Commande / Client</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Date / Heure</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Chauffeur / Véhicule</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Statut</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredCueillettes.map(item => (
                    <tr key={item.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.type === 'Cueillette' ? 'bg-blue-100 text-blue-800' : item.type === 'Livraison' ? 'bg-emerald-100 text-emerald-800' : 'bg-purple-100 text-purple-800'}`}>
                          {item.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-800">{item.commande}</div>
                        <div className="text-sm text-slate-500">{item.client}</div>
                        <div className="text-xs text-slate-400 mt-1">{item.adresse}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-800">{item.date}</div>
                        <div className="text-sm text-slate-500">{item.heure}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-800">{item.chauffeur}</div>
                        <div className="text-sm text-slate-500">{item.vehicule}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.statut === 'Complétée' ? 'bg-emerald-100 text-emerald-800' : item.statut === 'En cours' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'}`}>
                          {item.statut}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"><Icon name="edit" size={18}/></button>
                          {item.statut !== 'Complétée' && (
                            <button onClick={() => completeCueillette(item.id)} className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg"><Icon name="check" size={18}/></button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* CALENDRIER */}
        {cueillettesTab === 'calendrier' && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <button className="p-2 hover:bg-slate-100 rounded-lg"><Icon name="left" size={24}/></button>
              <h2 className="text-xl font-bold text-slate-800">Semaine du 20 au 24 janvier 2026</h2>
              <button className="p-2 hover:bg-slate-100 rounded-lg"><Icon name="right" size={24}/></button>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {['Lun 20', 'Mar 21', 'Mer 22', 'Jeu 23', 'Ven 24'].map((jour, index) => {
                const dates = ['2026-01-20', '2026-01-21', '2026-01-22', '2026-01-23', '2026-01-24'];
                const jourCueillettes = cueillettes.filter(c => c.date === dates[index]);
                const isToday = dates[index] === '2026-01-22';
                return (
                  <div key={jour} className={`border rounded-xl p-4 min-h-[250px] ${isToday ? 'border-amber-400 bg-amber-50/50' : 'border-slate-200'}`}>
                    <div className="text-center mb-4">
                      <p className={`text-sm font-bold ${isToday ? 'text-amber-600' : 'text-slate-800'}`}>{jour}</p>
                      {jourCueillettes.length > 0 && (
                        <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium mt-1">
                          {jourCueillettes.length} tâche(s)
                        </span>
                      )}
                    </div>
                    <div className="space-y-2">
                      {jourCueillettes.map(c => (
                        <div key={c.id} className={`p-2 rounded-lg text-xs ${c.type === 'Cueillette' ? 'bg-blue-100 border border-blue-200' : c.type === 'Livraison' ? 'bg-emerald-100 border border-emerald-200' : 'bg-purple-100 border border-purple-200'}`}>
                          <div className="font-semibold">{c.heure}</div>
                          <div className="truncate">{c.client}</div>
                          <div className="text-slate-500 truncate">{c.type}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VÉHICULES */}
        {cueillettesTab === 'vehicules' && (
          <div className="space-y-6">
            <div className="flex justify-end">
              <button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg">
                <Icon name="plus" size={20}/>Ajouter véhicule
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {vehicules.map(v => (
                <div key={v.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                      <Icon name="truck" size={24}/>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${v.statut === 'Disponible' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                      {v.statut}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg">{v.nom}</h3>
                  <p className="text-slate-500 text-sm mt-1">{v.type}</p>
                  <p className="text-slate-400 text-sm mt-1">Plaque: {v.plaque}</p>
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg text-sm">Modifier</button>
                    <button className="flex-1 px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium rounded-lg text-sm">Assigner</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CHAUFFEURS */}
        {cueillettesTab === 'chauffeurs' && (
          <div className="space-y-6">
            <div className="flex justify-end">
              <button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg">
                <Icon name="plus" size={20}/>Ajouter chauffeur
              </button>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Chauffeur</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Téléphone</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Permis</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Statut</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {chauffeurs.map(c => (
                    <tr key={c.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">
                            {c.nom.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="font-medium text-slate-800">{c.nom}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{c.telephone}</td>
                      <td className="px-6 py-4 text-slate-600">{c.permis}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${c.statut === 'Actif' ? 'bg-emerald-100 text-emerald-800' : c.statut === 'En livraison' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-600'}`}>
                          {c.statut}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"><Icon name="edit" size={18}/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  };

  // === INVENTAIRE ===
  const Inventaire = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Inventaire</h1>
          <p className="text-slate-500 mt-1">Gestion des stocks et fournisseurs</p>
        </div>
        <button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg">
          <Icon name="plus" size={20}/>Ajouter produit
        </button>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Produit</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Quantité</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Seuil</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Fournisseur</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {inventaire.map(item => (
              <tr key={item.id} className={`hover:bg-slate-50 ${item.quantite <= item.seuil ? 'bg-red-50' : ''}`}>
                <td className="px-6 py-4">
                  <p className="font-medium text-slate-800">{item.produit}</p>
                  <p className="text-sm text-slate-500">{item.unite}</p>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-lg font-bold ${item.quantite <= item.seuil ? 'text-red-600' : 'text-slate-800'}`}>{item.quantite}</span>
                </td>
                <td className="px-6 py-4 text-slate-600">{item.seuil}</td>
                <td className="px-6 py-4 text-slate-600">{item.fournisseur}</td>
                <td className="px-6 py-4">
                  {item.quantite <= item.seuil ? (
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">Réapprovisionner</span>
                  ) : (
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold">OK</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // === ACHATS ===
  const Achats = () => {
    const [achatsTab, setAchatsTab] = useState('commandes');
    const [achatsData] = useState([
      { id: 1, numero: 'PO-2024-001', fournisseur: 'Alu-Québec', date: '2026-01-15', montant: 4500, statut: 'Livrée', items: 'Aluminium 6063-T5 (200 pieds)' },
      { id: 2, numero: 'PO-2024-002', fournisseur: 'Fasteners Pro', date: '2026-01-18', montant: 850, statut: 'En transit', items: 'Vis inox #10 (5000 unités)' },
      { id: 3, numero: 'PO-2024-003', fournisseur: 'Rampes Canada', date: '2026-01-20', montant: 2200, statut: 'En attente', items: 'Main courante ronde (100 pieds)' },
    ]);

    const [fournisseurs] = useState([
      { id: 1, nom: 'Alu-Québec', contact: 'Martin Gagnon', telephone: '514-555-1000', email: 'martin@alu-quebec.ca', delaiMoyen: '5 jours' },
      { id: 2, nom: 'Fasteners Pro', contact: 'Sophie Lavoie', telephone: '450-555-2000', email: 'sophie@fastenerspro.ca', delaiMoyen: '3 jours' },
      { id: 3, nom: 'Rampes Canada', contact: 'Pierre Tremblay', telephone: '514-555-3000', email: 'pierre@rampescanada.ca', delaiMoyen: '7 jours' },
    ]);

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Achats</h1>
            <p className="text-slate-500 mt-1">Gestion des commandes fournisseurs</p>
          </div>
          <button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg">
            <Icon name="plus" size={20}/>Nouvelle commande
          </button>
        </div>

        {/* Onglets */}
        <div className="flex gap-2 bg-slate-100 p-1 rounded-xl w-fit">
          <button onClick={() => setAchatsTab('commandes')} className={`px-5 py-2.5 rounded-lg font-medium transition-all ${achatsTab === 'commandes' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
            Commandes fournisseurs
          </button>
          <button onClick={() => setAchatsTab('fournisseurs')} className={`px-5 py-2.5 rounded-lg font-medium transition-all ${achatsTab === 'fournisseurs' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
            Fournisseurs
          </button>
        </div>

        {/* COMMANDES FOURNISSEURS */}
        {achatsTab === 'commandes' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-500">En attente</p>
                <p className="text-2xl font-bold text-amber-600 mt-1">{achatsData.filter(a => a.statut === 'En attente').length}</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-blue-100">
                <p className="text-sm text-slate-500">En transit</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">{achatsData.filter(a => a.statut === 'En transit').length}</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-emerald-100">
                <p className="text-sm text-slate-500">Livrées ce mois</p>
                <p className="text-2xl font-bold text-emerald-600 mt-1">{achatsData.filter(a => a.statut === 'Livrée').length}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">N° Commande</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Fournisseur</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Articles</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Montant</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Statut</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {achatsData.map(achat => (
                    <tr key={achat.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-mono font-semibold text-slate-800">{achat.numero}</td>
                      <td className="px-6 py-4 text-slate-700">{achat.fournisseur}</td>
                      <td className="px-6 py-4 text-slate-600 text-sm">{achat.items}</td>
                      <td className="px-6 py-4 text-slate-600">{achat.date}</td>
                      <td className="px-6 py-4 font-medium text-slate-800">{achat.montant.toLocaleString()} $</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${achat.statut === 'Livrée' ? 'bg-emerald-100 text-emerald-800' : achat.statut === 'En transit' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'}`}>
                          {achat.statut}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"><Icon name="edit" size={18}/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* FOURNISSEURS */}
        {achatsTab === 'fournisseurs' && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Fournisseur</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Contact</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Téléphone</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Courriel</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Délai moyen</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {fournisseurs.map(f => (
                  <tr key={f.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-semibold text-slate-800">{f.nom}</td>
                    <td className="px-6 py-4 text-slate-600">{f.contact}</td>
                    <td className="px-6 py-4 text-slate-600">{f.telephone}</td>
                    <td className="px-6 py-4 text-slate-600">{f.email}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">{f.delaiMoyen}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"><Icon name="edit" size={18}/></button>
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"><Icon name="cart" size={18}/></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };

  // === RENTABILITÉ ===
  const Rentabilite = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Rentabilité</h1>
        <p className="text-slate-500 mt-1">Analyse de rentabilité des projets</p>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Projet</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Heures prévues</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Heures réelles</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Taux installation</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Rentabilité</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {commandes.filter(c => c.statut === 'Complétée').map(cmd => {
              const rentabilite = cmd.heuresReelles ? ((cmd.heuresEstimees - cmd.heuresReelles) / cmd.heuresEstimees * 100) : 0;
              return (
                <tr key={cmd.id} className={`hover:bg-slate-50 ${rentabilite > 20 ? 'bg-emerald-50' : ''}`}>
                  <td className="px-6 py-4">
                    <p className="font-medium text-slate-800">{cmd.num}</p>
                    <p className="text-sm text-slate-500">{cmd.client}</p>
                  </td>
                  <td className="px-6 py-4 text-slate-800 font-medium">{cmd.heuresEstimees}h</td>
                  <td className="px-6 py-4 text-slate-800 font-medium">{cmd.heuresReelles || '-'}h</td>
                  <td className="px-6 py-4 text-slate-800 font-medium">85%</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${rentabilite > 20 ? 'bg-emerald-100 text-emerald-800' : rentabilite > 0 ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                      {rentabilite > 0 ? '+' : ''}{rentabilite.toFixed(0)}%
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  // === ATTENTES ===
  const Attentes = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Attentes</h1>
          <p className="text-slate-500 mt-1">Suivi des attentes clients et représentants</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Icon name="mail" size={16}/>Courriel automatique chaque lundi
        </div>
      </div>
      <div className="flex gap-2 bg-slate-100 p-1 rounded-xl w-fit">
        <button onClick={() => setAttenteTab('clients')} className={`px-5 py-2.5 rounded-lg font-medium ${attenteTab === 'clients' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
          Attentes clients ({attentes.clients.length})
        </button>
        <button onClick={() => setAttenteTab('representants')} className={`px-5 py-2.5 rounded-lg font-medium ${attenteTab === 'representants' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
          Attentes représentants ({attentes.representants.length})
        </button>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden divide-y divide-slate-100">
        {attenteTab === 'clients' && attentes.clients.map(item => (
          <div key={item.id} className="p-4 hover:bg-slate-50">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-slate-800">{item.client}</p>
                <p className="text-slate-600 mt-1">{item.raison}</p>
                <p className="text-sm text-slate-500 mt-2">Représentant: {item.representant}</p>
              </div>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold">Depuis {item.depuis}</span>
            </div>
          </div>
        ))}
        {attenteTab === 'representants' && attentes.representants.map(item => (
          <div key={item.id} className="p-4 hover:bg-slate-50">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-slate-800">{item.representant}</p>
                <p className="text-slate-600 mt-1">{item.raison}</p>
                <p className="text-sm text-slate-500 mt-2">Commande: {item.commande}</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Depuis {item.depuis}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // === DÉLAIS ===
  const Delais = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Délais de livraison</h1>
          <p className="text-slate-500 mt-1">Suivi des retards fournisseurs</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Icon name="mail" size={16}/>Notification automatique aux représentants
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 divide-y divide-slate-100">
        {delais.map(item => (
          <div key={item.id} className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-slate-800">{item.produit}</p>
                <p className="text-slate-500">{item.fournisseur}</p>
                <p className="text-sm text-red-600 mt-2">{item.raison}</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-xs text-slate-500">Délai initial</p>
                  <p className="font-medium text-slate-800 line-through">{item.delaiInitial}</p>
                </div>
                <div className="text-2xl text-slate-300">→</div>
                <div className="text-center">
                  <p className="text-xs text-slate-500">Nouveau délai</p>
                  <p className="font-medium text-red-600">{item.nouveauDelai}</p>
                </div>
                <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"><Icon name="edit" size={18}/></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // === NON-CONFORMITÉS ===
  const NonConformites = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Non-conformités</h1>
          <p className="text-slate-500 mt-1">Suivi des erreurs internes</p>
        </div>
        <button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg">
          <Icon name="plus" size={20}/>Signaler NC
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {['Ventes', 'Production', 'Installation', 'Logistique'].map(dep => (
          <div key={dep} className="bg-white p-4 rounded-xl border border-slate-100">
            <p className="text-sm text-slate-500">{dep}</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{nonConformites.filter(nc => nc.departement === dep).length}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 divide-y divide-slate-100">
        {nonConformites.map(nc => (
          <div key={nc.id} className="p-4 hover:bg-slate-50">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono font-medium text-slate-800">{nc.commande}</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold ${nc.statut === 'Ouvert' ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'}`}>{nc.statut}</span>
                </div>
                <p className="text-slate-600 mt-2">{nc.description}</p>
                <p className="text-sm text-slate-500 mt-1">Département: {nc.departement}</p>
              </div>
              <span className="text-sm text-slate-500">{nc.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // === MULTI-LOGEMENTS ===
  const MultiLogements = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Multi-logements</h1>
          <p className="text-slate-500 mt-1">Gestion des grands projets</p>
        </div>
        <button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg">
          <Icon name="plus" size={20}/>Nouveau projet
        </button>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold text-slate-800">Résidences du Parc</h2>
              <p className="text-slate-500">Gestion Immobilière XYZ</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-500">Progression</p>
              <p className="text-2xl font-bold text-amber-600">4/12</p>
            </div>
          </div>
          <div className="mt-4 bg-slate-100 rounded-full h-3 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-400 to-yellow-500 h-full rounded-full" style={{ width: '33%' }}/>
          </div>
        </div>
        <div className="divide-y divide-slate-100">
          {['Bâtiment A - Unité 101', 'Bâtiment A - Unité 102', 'Bâtiment B - Unité 201'].map((unite, i) => (
            <div key={i} className="p-4 flex justify-between items-center hover:bg-slate-50">
              <span className="text-slate-700">{unite}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${i < 2 ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'}`}>
                {i < 2 ? 'Complétée' : 'Planifiée'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // === ÉCRAN GÉNÉRIQUE ===
  const GenericScreen = ({ title }) => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-800">{title}</h1>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center">
        <p className="text-slate-600 font-medium">Module en développement</p>
        <p className="text-sm text-slate-400 mt-2">Cette section sera disponible prochainement</p>
      </div>
    </div>
  );

  // === ROUTER ===
  const renderScreen = () => {
    switch(currentScreen) {
      case 'dashboard': return <Dashboard />;
      case 'clients': return <Clients />;
      case 'commandes': return <Commandes />;
      case 'production': return <Production />;
      case 'planification': return <Planification />;
      case 'installations': return <Installations />;
      case 'cueillettes': return <Cueillettes />;
      case 'inventaire': return <Inventaire />;
      case 'achats': return <Achats />;
      case 'rentabilite': return <Rentabilite />;
      case 'attentes': return <Attentes />;
      case 'delais': return <Delais />;
      case 'nonconformites': return <NonConformites />;
      case 'multilogements': return <MultiLogements />;
      default: return <GenericScreen title={menuItems.find(m => m.id === currentScreen)?.label || 'Module'} />;
    }
  };

  // === LAYOUT PRINCIPAL ===
  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-slate-900 text-white transition-all duration-300 overflow-hidden flex flex-col`}>
        <div className="p-5 border-b border-slate-700/50">
          <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-black text-lg py-2.5 px-4 rounded-xl text-center">
            RAMPES GARDEX
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto py-3">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => { setCurrentScreen(item.id); setSelectedCommande(null); }}
              className={`w-full flex items-center gap-3 px-5 py-3 transition-all ${currentScreen === item.id ? 'bg-slate-800 border-l-4 border-amber-400 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/50 border-l-4 border-transparent'}`}
            >
              <Icon name={item.icon} size={20}/>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-700/50">
          <button onClick={() => setIsLoggedIn(false)} className="w-full flex items-center gap-3 px-4 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg">
            <Icon name="logout" size={20}/>
            <span className="text-sm font-medium">Déconnexion</span>
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-slate-100 rounded-xl">
            <Icon name={sidebarOpen ? 'x' : 'menu'} size={24}/>
          </button>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-xl relative">
              <Icon name="bell" size={22}/>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"/>
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-800">Admin Utilisateur</p>
                <p className="text-xs text-slate-500">admin@rampesgardex.com</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center font-bold text-slate-900">A</div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          {renderScreen()}
        </main>
      </div>
    </div>
  );
}