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
  /// === NOUVEAUX ÉTATS PRODUCTION ===
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 0, 1));
  const [selectedProductionDate, setSelectedProductionDate] = useState(null);
  const [showMettreEnProduction, setShowMettreEnProduction] = useState(false);
  const [productionSearchTerm, setProductionSearchTerm] = useState('');
  const [productionFilterSemaine, setProductionFilterSemaine] = useState('toutes');

  const optionsAchat = [
    { code: '', label: 'Non défini', color: 'bg-slate-100 text-slate-500' },
    { code: '①', label: 'Achat à faire', color: 'bg-orange-100 text-orange-700' },
    { code: '√', label: 'Achat fait', color: 'bg-blue-100 text-blue-700' },
    { code: 'R', label: 'Achat réceptionné', color: 'bg-green-500 text-white' },
    { code: 'P', label: 'Achat prêt à ramasser', color: 'bg-purple-100 text-purple-700' },
    { code: 'B/O', label: 'Achat reçu partiellement (Back/Order)', color: 'bg-amber-100 text-amber-700' },
  ];

  // === ÉTATS PLANIFICATION ===
  const [planificationMonth, setPlanificationMonth] = useState(new Date(2026, 0, 1));
  const [selectedPlanificationDate, setSelectedPlanificationDate] = useState(null);
  const [showPlanifierModal, setShowPlanifierModal] = useState(false);
  const [showEquipesModal, setShowEquipesModal] = useState(false);
  const [selectedInstallation, setSelectedInstallation] = useState(null);
  const [planificationTab, setPlanificationTab] = useState('calendrier');
  const [planificationFilterEquipe, setPlanificationFilterEquipe] = useState('toutes');
  const [planificationSearchTerm, setPlanificationSearchTerm] = useState('');

  // === ÉTAT POUR LE FORMULAIRE DE PLANIFICATION ===
  const [formPlanif, setFormPlanif] = useState({
    date: '',
    equipe: '',
    clientPresent: false,
    representantPresent: false,
    envoyerAvis: false
  });
  
  // === ÉTATS ÉQUIPES ===
  const [equipesList, setEquipesList] = useState([
    { id: 1, nom: 'Équipe A', membres: ['Jean Dupont', 'Marc Tremblay'], couleur: 'bg-blue-500' },
    { id: 2, nom: 'Équipe B', membres: ['Pierre Lavoie', 'Paul Gagnon'], couleur: 'bg-green-500' },
    { id: 3, nom: 'Équipe C', membres: ['Luc Martin', 'André Roy'], couleur: 'bg-purple-500' },
  ]);
  const [showAddEquipeModal, setShowAddEquipeModal] = useState(false);
  const [editingEquipe, setEditingEquipe] = useState(null);
  const [equipeForm, setEquipeForm] = useState({ nom: '', membres: [], couleur: 'bg-blue-500' });
  // Options pour les codes de production
  const optionsProduction = [
    { code: '', label: 'Non défini', color: 'bg-slate-100 text-slate-500' },
    { code: '√', label: 'Étape complétée', color: 'bg-emerald-500 text-white' },
    { code: 'At.C', label: 'En attente réponse client', color: 'bg-yellow-100 text-yellow-700' },
    { code: 'N/A', label: 'Non applicable', color: 'bg-slate-200 text-slate-600' },
    { code: 'P', label: 'Étape partiellement complétée', color: 'bg-blue-100 text-blue-700' },
    { code: 'D', label: 'Dossier donné au mesureur', color: 'bg-indigo-100 text-indigo-700' },
    { code: 'M', label: 'Modification d\'un dossier', color: 'bg-orange-100 text-orange-700' },
    { code: 'C-C', label: 'Attente confirmation Carol', color: 'bg-pink-100 text-pink-700' },
    { code: 'C-RM', label: 'Attente Carol retourner mesures', color: 'bg-rose-100 text-rose-700' },
    { code: 'B/O', label: 'Commande avec back order', color: 'bg-amber-100 text-amber-700' },
    { code: 'At. Rep', label: 'Attente réponse représentant', color: 'bg-cyan-100 text-cyan-700' },
  ];

  // Fonction pour obtenir la couleur d'un code de statut
  const getStatusColor = (code, type = 'achat') => {
    const options = type === 'achat' ? optionsAchat : optionsProduction;
    const option = options.find(o => o.code === code);
    return option ? option.color : 'bg-slate-100 text-slate-500';
  };
  // === DONNÉES ===
  const [commandes, setCommandes] = useState([
    { id: 1, num: 'CMD-2024-001', client: 'Construction Leblanc', representant: 'Marc Dupont', type: 'Standard', activite: 'Installation', statut: 'Active', dateInstallation: '2026-01-28', heuresEstimees: 6, heuresReelles: null, notes: 'Rampe aluminium 12 pieds', enProduction: true, productionTerminee: false, adresse: '123 Rue Principale, Montréal', equipe: 'Équipe A' },
    { id: 2, num: 'CMD-2024-002', client: 'Rénovations ABC', representant: 'Julie Tremblay', type: 'Commercial', activite: 'Livraison', statut: 'Active', dateInstallation: '2026-01-29', heuresEstimees: 12, heuresReelles: null, notes: 'Projet commercial - 3 rampes', enProduction: true, productionTerminee: false, adresse: '456 Boul. St-Laurent, Laval', equipe: 'Équipe B' },
    { id: 3, num: 'CMD-2024-003', client: 'Gestion Immobilière XYZ', representant: 'Pierre Roy', type: 'Multi-phases', activite: 'Transport', statut: 'Active', dateInstallation: '2026-01-30', heuresEstimees: 24, heuresReelles: null, notes: 'Multi-logements - Phase 1', enProduction: false, productionTerminee: false, adresse: '789 Ave du Parc, Longueuil', equipe: null },
    { id: 4, num: 'CMD-2024-004', client: 'Résidence Soleil', representant: 'Marc Dupont', type: 'Standard', activite: 'Cueillette', statut: 'Complétée', dateInstallation: '2026-01-20', heuresEstimees: 4, heuresReelles: 5, notes: 'Installation complétée', enProduction: false, productionTerminee: true, dateCompletion: '2026-01-20', adresse: '321 Rue du Soleil, Brossard', equipe: 'Équipe A' },
    { id: 5, num: 'CMD-2024-005', client: 'Centre Médical Plus', representant: 'Julie Tremblay', type: 'Commercial', activite: 'Installation', statut: 'Complétée', dateInstallation: '2026-01-18', heuresEstimees: 8, heuresReelles: 7, notes: 'Projet terminé sous budget', enProduction: false, productionTerminee: true, dateCompletion: '2026-01-18', adresse: '654 Boul. Santé, Terrebonne', equipe: 'Équipe C' },
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
// === ÉTAT POUR LE FORMULAIRE D'ÉDITION D'INSTALLATION ===
  const [editInstallationForm, setEditInstallationForm] = useState({
    datePrevue: '',
    equipe: '',
    tempsEstimeInstallation: 0,
    commentaire: ''
  });
  
  const [clientsList, setClientsList] = useState([
    { 
      id: 1, 
      nom: 'Construction Leblanc', 
      type: 'Entrepreneur',
      adresse: '123 Rue Principale',
      ville: 'Montréal',
      province: 'Québec',
      pays: 'Canada',
      codePostal: 'H2X 1Y6',
      telephone: '514-555-0101',
      cellulaire: '514-555-0102',
      fax: '',
      contact: 'Jean Leblanc', 
      emails: ['jean@leblanc.ca'],
      communicationTexto: false,
      communicationCourriel: true,
      communicationTelephone: true,
      commentaires: '',
      commandesEnCours: [
        { type: 'Installation', count: 2 },
        { type: 'Livraison', count: 1 }
      ]
    },
    { 
      id: 2, 
      nom: 'Rénovations ABC', 
      type: 'Entrepreneur',
      adresse: '456 Boul. St-Laurent',
      ville: 'Laval',
      province: 'Québec',
      pays: 'Canada',
      codePostal: 'H7N 3B6',
      telephone: '450-555-0202',
      cellulaire: '',
      fax: '450-555-0203',
      contact: 'Marie Côté', 
      emails: ['marie@abc-reno.ca', 'info@abc-reno.ca'],
      communicationTexto: true,
      communicationCourriel: true,
      communicationTelephone: false,
      commentaires: 'Client prioritaire',
      commandesEnCours: [
        { type: 'Cueillette', count: 1 },
        { type: 'Transport', count: 2 }
      ]
    },
    { 
      id: 3, 
      nom: 'Gestion Immobilière XYZ', 
      type: 'Distributeur',
      adresse: '789 Ave du Parc',
      ville: 'Longueuil',
      province: 'Québec',
      pays: 'Canada',
      codePostal: 'J4H 2T5',
      telephone: '514-555-0303',
      cellulaire: '514-555-0304',
      fax: '',
      contact: 'Robert Martin', 
      emails: ['robert@xyz-immo.ca', 'admin@xyz-immo.ca', 'facturation@xyz-immo.ca'],
      communicationTexto: false,
      communicationCourriel: true,
      communicationTelephone: true,
      commentaires: 'Multi-logements - contrat annuel',
      commandesEnCours: [
        { type: 'Installation', count: 3 },
        { type: 'Livraison', count: 2 },
        { type: 'Cueillette', count: 1 },
        { type: 'Transport', count: 1 }
      ]
    },
    { 
      id: 4, 
      nom: 'Michel Tremblay', 
      type: 'Résidentiel',
      adresse: '321 Rue des Érables',
      ville: 'Brossard',
      province: 'Québec',
      pays: 'Canada',
      codePostal: 'J4W 2R5',
      telephone: '450-555-0404',
      cellulaire: '450-555-0405',
      fax: '',
      contact: 'Michel Tremblay', 
      emails: ['michel.tremblay@gmail.com'],
      communicationTexto: true,
      communicationCourriel: false,
      communicationTelephone: true,
      commentaires: '',
      commandesEnCours: [
        { type: 'Installation', count: 1 }
      ]
    },
    { 
      id: 5, 
      nom: 'Pro-Rampes Québec', 
      type: 'Ambassadeur',
      adresse: '555 Boul. Industriel',
      ville: 'Québec',
      province: 'Québec',
      pays: 'Canada',
      codePostal: 'G1K 4E2',
      telephone: '418-555-0505',
      cellulaire: '418-555-0506',
      fax: '418-555-0507',
      contact: 'Sylvie Gagnon', 
      emails: ['sylvie@prorampes.ca', 'ventes@prorampes.ca'],
      communicationTexto: true,
      communicationCourriel: true,
      communicationTelephone: true,
      commentaires: 'Ambassadeur région Québec',
      commandesEnCours: []
    },
  ]);

  const [showClientModal, setShowClientModal] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [clientForm, setClientForm] = useState({
    nom: '',
    type: 'Entrepreneur',
    adresse: '',
    ville: '',
    province: 'Québec',
    pays: 'Canada',
    codePostal: '',
    telephone: '',
    cellulaire: '',
    fax: '',
    contact: '',
    emails: [''],
    communicationTexto: false,
    communicationCourriel: false,
    communicationTelephone: false,
    commentaires: ''
  });

  const [clientSearchTerm, setClientSearchTerm] = useState('');
  const [clientFilterType, setClientFilterType] = useState('tous');

  const typesClient = ['Entrepreneur', 'Résidentiel', 'Distributeur', 'Ambassadeur'];
  const provinces = ['Québec', 'Ontario', 'Nouveau-Brunswick', 'Nouvelle-Écosse', 'Manitoba', 'Saskatchewan', 'Alberta', 'Colombie-Britannique', 'Île-du-Prince-Édouard', 'Terre-Neuve-et-Labrador'];


  // === FONCTIONS ===
  // Couleurs selon la politique: Cueillette=jaune, Livraison=bleu, Installation=rouge, Transport=vert
  const getActiviteColor = (activite) => {
    switch(activite) {
      case 'Cueillette': return 'text-yellow-900';
      case 'Livraison': return 'text-blue-900';
      case 'Installation': return 'text-white';
      case 'Transport': return 'text-white';
      default: return 'text-slate-800';
    }
  };

  const getActiviteBgColor = (activite) => {
    switch(activite) {
      case 'Cueillette': return 'bg-yellow-400 text-yellow-900';
      case 'Livraison': return 'bg-blue-500 text-white';
      case 'Installation': return 'bg-red-600 text-white';
      case 'Transport': return 'bg-green-500 text-white';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  // Couleur de fond pour les cartes complètes (style calendrier) - TRÈS VISIBLE
  const getActiviteCardBg = (activite) => {
    switch(activite) {
      case 'Cueillette': return 'bg-yellow-400 border-yellow-500 text-yellow-900';
      case 'Livraison': return 'bg-blue-500 border-blue-600 text-white';
      case 'Installation': return 'bg-red-600 border-red-700 text-white';
      case 'Transport': return 'bg-green-500 border-green-600 text-white';
      default: return 'bg-slate-200 border-slate-300 text-slate-800';
    }
  };

  // Couleur de fond pour les lignes de tableau
  const getActiviteRowBg = (activite) => {
    switch(activite) {
      case 'Cueillette': return 'bg-yellow-50 hover:bg-yellow-100';
      case 'Livraison': return 'bg-blue-50 hover:bg-blue-100';
      case 'Installation': return 'bg-red-50 hover:bg-red-100';
      case 'Transport': return 'bg-green-50 hover:bg-green-100';
      default: return 'hover:bg-slate-50';
    }
  };
  const [commandesList, setCommandesList] = useState([
    { 
      id: 1, 
      num: 'CMD-2024-001', 
      client: 'Construction Leblanc',
      reference: 'REF-001',
      representant: 'Martin Dupuis',
      service: 'Installation',
      typeCommande: 'Standard',
      ville: 'Montréal',
      commentaire: 'Client prioritaire - Livraison avant 10h',
      dateEntree: '2024-01-15',
      datePrevue: '2024-02-20',
      dateProduction: '2024-02-01',
      datePriseMesure: '2024-01-20',
      dateLivraison: '2024-02-18',
      prixVenteMateriaux: 5000,
      prixVenteInstallation: 2500,
      mettreTempInstallation: true,
      tempsEstimeInstallation: 4,
      piedsCarresFibre: 120,
      projet: false,
      reprise: false,
      mesure: 'Oui',
      mesureDonneeLe: '2024-01-22',
      plan: 'Oui',
      envoyeProduction: 'Oui',
      productionTerminee: 'Oui',
      termine: '',
      // Achats
      achatFibre: 'Commandé',
      dateReceptionFibre: '2024-01-25',
      achatLimons: 'Reçu',
      dateReceptionLimons: '2024-01-26',
      achatVerres: 'Commandé',
      dateReceptionVerre: '2024-01-28',
      achatColonnes: 'Reçu',
      dateReceptionColonnes: '2024-01-27',
      achatPeinture: '',
      dateReceptionPeinture: '',
      achatAttaches: 'Reçu',
      dateReceptionAttaches: '2024-01-24',
      achatPlancherAluminium: '',
      dateReceptionPlancherAluminium: '',
      structure: false,
      couleur: 'Noir',
      // Pieds de rampes
      piedsRampesBarrotin: 35,
      piedsRampesVerre: 0,
      piedsRampesMurIntimite: 0,
      piedsRampesMainDouble: 0,
      piedsRampesGardexVision: 0,
      piedsRampesGardexVisionUrbaine: 0,
      piedsRampesGardexVisionOptimum: 0,
      piedsLineairesRampes: 35,
      // Avertissements
      avertissementClient: '',
      dateAvertissement: '',
      avertissementPriseMesure: '',
      dateAvertissementPriseMesure: '',
      // Livraison
      livraison: 'Effectuée',
      statut: 'Active',
      activite: 'Installation'
    },
    { 
      id: 2, 
      num: 'CMD-2024-002', 
      client: 'Rénovations ABC',
      reference: 'REF-002',
      representant: 'Sophie Tremblay',
      service: 'Livraison',
      typeCommande: 'Commercial',
      ville: 'Laval',
      commentaire: '',
      dateEntree: '2024-01-18',
      datePrevue: '2024-02-25',
      dateProduction: '2024-02-05',
      datePriseMesure: '2024-01-22',
      dateLivraison: '',
      prixVenteMateriaux: 15000,
      prixVenteInstallation: 8000,
      mettreTempInstallation: true,
      tempsEstimeInstallation: 12,
      piedsCarresFibre: 350,
      projet: true,
      reprise: false,
      mesure: 'Oui',
      mesureDonneeLe: '2024-01-25',
      plan: 'Oui',
      envoyeProduction: 'Oui',
      productionTerminee: '',
      termine: '',
      achatFibre: 'Commandé',
      dateReceptionFibre: '2024-02-01',
      achatLimons: 'Commandé',
      dateReceptionLimons: '2024-02-01',
      achatVerres: '',
      dateReceptionVerre: '',
      achatColonnes: 'Commandé',
      dateReceptionColonnes: '2024-02-02',
      achatPeinture: 'Commandé',
      dateReceptionPeinture: '2024-02-03',
      achatAttaches: 'Commandé',
      dateReceptionAttaches: '2024-02-01',
      achatPlancherAluminium: '',
      dateReceptionPlancherAluminium: '',
      structure: false,
      couleur: 'Blanc',
      piedsRampesBarrotin: 0,
      piedsRampesVerre: 150,
      piedsRampesMurIntimite: 50,
      piedsRampesMainDouble: 0,
      piedsRampesGardexVision: 0,
      piedsRampesGardexVisionUrbaine: 0,
      piedsRampesGardexVisionOptimum: 0,
      piedsLineairesRampes: 200,
      avertissementClient: '',
      dateAvertissement: '',
      avertissementPriseMesure: '',
      dateAvertissementPriseMesure: '',
      livraison: 'Non effectuée',
      statut: 'Active',
      activite: 'Livraison',
      // Champs Commercial
      nombreBalcons: 10,
      nombrePoteaux: 45,
      piedsLineairesEstime: 320,
      piedsLineairesReels: 0,
      differencesPiedsLineaires: 0,
      balconsDetails: [
        { id: 1, balcon: '201à205', coutBalcon: 8091, piedsLineaires: 110, poteaux: 20, produit: true, installationTerminee: true, reprise: false },
        { id: 2, balcon: '206', coutBalcon: 2059, piedsLineaires: 28, poteaux: 6, produit: true, installationTerminee: true, reprise: false },
        { id: 3, balcon: '207', coutBalcon: 2427, piedsLineaires: 33, poteaux: 7, produit: true, installationTerminee: false, reprise: false },
        { id: 4, balcon: '208à211', coutBalcon: 7723, piedsLineaires: 105, poteaux: 20, produit: true, installationTerminee: false, reprise: false },
        { id: 5, balcon: '212', coutBalcon: 2059, piedsLineaires: 28, poteaux: 6, produit: false, installationTerminee: false, reprise: false },
      ]
    },
    { 
      id: 3, 
      num: 'CMD-2024-003', 
      client: 'Gestion Immobilière XYZ',
      reference: 'REF-003',
      representant: 'Martin Dupuis',
      service: 'Cueillette',
      typeCommande: 'Multi-phase',
      ville: 'Longueuil',
      commentaire: 'Projet multi-logements phase 1',
      dateEntree: '2024-01-20',
      datePrevue: '2024-03-15',
      dateProduction: '2024-02-15',
      datePriseMesure: '2024-01-28',
      dateLivraison: '',
      prixVenteMateriaux: 25000,
      prixVenteInstallation: 12000,
      mettreTempInstallation: true,
      tempsEstimeInstallation: 24,
      piedsCarresFibre: 500,
      projet: true,
      reprise: false,
      mesure: 'Oui',
      mesureDonneeLe: '2024-01-30',
      plan: 'Oui',
      envoyeProduction: '',
      productionTerminee: '',
      termine: '',
      achatFibre: '',
      dateReceptionFibre: '',
      achatLimons: '',
      dateReceptionLimons: '',
      achatVerres: '',
      dateReceptionVerre: '',
      achatColonnes: '',
      dateReceptionColonnes: '',
      achatPeinture: '',
      dateReceptionPeinture: '',
      achatAttaches: '',
      dateReceptionAttaches: '',
      achatPlancherAluminium: '',
      dateReceptionPlancherAluminium: '',
      structure: true,
      couleur: 'Gris',
      piedsRampesBarrotin: 100,
      piedsRampesVerre: 200,
      piedsRampesMurIntimite: 100,
      piedsRampesMainDouble: 50,
      piedsRampesGardexVision: 50,
      piedsRampesGardexVisionUrbaine: 0,
      piedsRampesGardexVisionOptimum: 0,
      piedsLineairesRampes: 500,
      avertissementClient: '',
      dateAvertissement: '',
      avertissementPriseMesure: '',
      dateAvertissementPriseMesure: '',
      livraison: 'Non effectuée',
      statut: 'Active',
      activite: 'Cueillette'
    },
{
      id: 101,
      num: '250942',
      client: 'Marc Rodrigue Et Mélissa Berthiaume',
      adresse: '123 Rue St-Étienne, Québec, QC',
      service: 'Installation',
      typeCommande: 'Standard',
      statut: 'Active',
      dateEntree: '2025-09-12',
      datePrevue: '2026-01-23',
      dateProduction: '2026-01-04',
      productionTerminee: '√',
      mesure: '√',
      plan: '√',
      envoyeProduction: '√',
      piedsLineaires: 143,
      tempsEstimeInstallation: 2,
      nombrePoteaux: 8,
      couleur: 'Noir',
      equipe: 'Équipe Xavier',
      commentaire: 'Envoyé pour approbation plan 01-10\nmesuré le 16 sept 2025\n***Retardé 1 sem***',
      achatVerres: 'R',
      achatLimons: 'R',
      representant: 'Jean',
      clientPresent: true,
      reprise: false
    },
    {
      id: 102,
      num: '260057',
      client: 'Construction Pierre Blouin',
      adresse: '456 Rue Principale, St-Nicolas, QC',
      reference: 'S.A.V (Loge-6 / 317)',
      service: 'Installation',
      typeCommande: 'Commercial',
      statut: 'Active',
      dateEntree: '2026-01-21',
      datePrevue: '2026-01-23',
      dateProduction: '2026-01-09',
      productionTerminee: '√',
      mesure: '√',
      plan: '√',
      envoyeProduction: '√',
      piedsLineaires: 0,
      tempsEstimeInstallation: 3,
      nombrePoteaux: 4,
      couleur: 'Blanc',
      equipe: 'Équipe Xavier',
      reprise: true,
      achatVerres: 'R',
      achatPeinture: 'R'
    },
    {
      id: 103,
      num: '251265',
      client: 'Blais Construction',
      adresse: '789 Boul. Laurier, Québec, QC',
      reference: 'Modif Berthier',
      service: 'Installation',
      typeCommande: 'Multiplan',
      statut: 'Active',
      dateEntree: '2026-01-15',
      datePrevue: '2026-01-27',
      productionTerminee: '√',
      mesure: '√',
      plan: '√',
      envoyeProduction: '√',
      piedsLineaires: 96,
      tempsEstimeInstallation: 6,
      nombrePoteaux: 12,
      couleur: 'Gris',
      equipe: 'Équipe Xavier'
    },
    {
      id: 104,
      num: '260042',
      client: 'Mathieu Bilodeau',
      adresse: '321 Ave des Érables, Lévis, QC',
      reference: 'S.A.V (251210)',
      service: 'Installation',
      typeCommande: 'Standard',
      statut: 'Active',
      dateEntree: '2026-01-20',
      datePrevue: '2026-01-28',
      productionTerminee: '√',
      mesure: '√',
      plan: '√',
      envoyeProduction: '√',
      piedsLineaires: 98,
      tempsEstimeInstallation: 2,
      nombrePoteaux: 6,
      couleur: 'Noir',
      equipe: 'Équipe Xavier'
    },
    {
      id: 105,
      num: '260034',
      client: 'Dexon Construction',
      adresse: '1260 Rue Des Prairies, Québec, QC',
      service: 'Installation',
      typeCommande: 'Commercial',
      statut: 'Active',
      dateEntree: '2026-01-18',
      datePrevue: '2026-01-30',
      productionTerminee: '√',
      mesure: '√',
      plan: '√',
      envoyeProduction: '√',
      piedsLineaires: 45,
      tempsEstimeInstallation: 1,
      nombrePoteaux: 3,
      couleur: 'Blanc',
      equipe: null // Non planifiée
    },
    {
      id: 106,
      num: '260089',
      client: 'Les Habitations Modernes',
      adresse: '541 Rue du Fleuve, Québec, QC',
      service: 'Installation',
      typeCommande: 'Multiphase',
      statut: 'Active',
      dateEntree: '2026-01-22',
      datePrevue: null,
      productionTerminee: '√',
      mesure: '√',
      plan: '√',
      envoyeProduction: '√',
      piedsLineaires: 200,
      tempsEstimeInstallation: 15, // Plus de 12h = plusieurs jours
      nombrePoteaux: 20,
      couleur: 'Noir',
      equipe: null // Non planifiée
    },
    {
      id: 107,
      num: '260091',
      client: 'Rénovations ABC',
      adresse: '890 Chemin Ste-Foy, Québec, QC',
      service: 'Mesure',
      typeCommande: 'Standard',
      statut: 'Active',
      dateEntree: '2026-01-25',
      datePrevue: '2026-01-29',
      productionTerminee: null,
      piedsLineaires: 0,
      tempsEstimeInstallation: 1,
      equipe: 'Équipe B'
    }

  ]);
  const [showCommandeModal, setShowCommandeModal] = useState(false);
  const [editingCommande, setEditingCommande] = useState(null);
  const [selectedCommandeDetail, setSelectedCommandeDetail] = useState(null);
  const [commandeSearchTerm, setCommandeSearchTerm] = useState('');
  const [commandeFilterClient, setCommandeFilterClient] = useState('tous');
  const [commandeFilterRepresentant, setCommandeFilterRepresentant] = useState('tous');
  const [commandeFilterService, setCommandeFilterService] = useState('tous');
  const [commandeFormSection, setCommandeFormSection] = useState(1); // Pour navigation dans le formulaire
  // === ÉTATS PLANIFICATION ===
 
  const [planificationFilterType, setPlanificationFilterType] = useState('tous'); // tous, installation, mesure
  const [planificationFilterCommande, setPlanificationFilterCommande] = useState('tous'); // tous, commercial, standard, multiplan, multiphase
  const [planificationFilterSemaine, setPlanificationFilterSemaine] = useState('toutes');
  const [showNonPlanifieesModal, setShowNonPlanifieesModal] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);
  const [showPlanifierInstallationModal, setShowPlanifierInstallationModal] = useState(false);
  const [installationAPlanifier, setInstallationAPlanifier] = useState(null);
  
  // === ÉTATS ÉQUIPES ===
  
  const emptyCommandeForm = {
    num: '',
    client: '',
    reference: '',
    representant: '',
    service: 'Installation',
    typeCommande: 'Standard',
    ville: '',
    commentaire: '',
    dateEntree: '',
    datePrevue: '',
    dateProduction: '',
    datePriseMesure: '',
    dateLivraison: '',
    prixVenteMateriaux: 0,
    prixVenteInstallation: 0,
    mettreTempInstallation: false,
    tempsEstimeInstallation: 0,
    piedsCarresFibre: 0,
    projet: false,
    reprise: false,
    mesure: '',
    mesureDonneeLe: '',
    plan: '',
    envoyeProduction: '',
    productionTerminee: '',
    termine: '',
    achatFibre: '',
    dateReceptionFibre: '',
    achatLimons: '',
    dateReceptionLimons: '',
    achatVerres: '',
    dateReceptionVerre: '',
    achatColonnes: '',
    dateReceptionColonnes: '',
    achatPeinture: '',
    dateReceptionPeinture: '',
    achatAttaches: '',
    dateReceptionAttaches: '',
    achatPlancherAluminium: '',
    dateReceptionPlancherAluminium: '',
    structure: false,
    couleur: '',
    piedsRampesBarrotin: 0,
    piedsRampesVerre: 0,
    piedsRampesMurIntimite: 0,
    piedsRampesMainDouble: 0,
    piedsRampesGardexVision: 0,
    piedsRampesGardexVisionUrbaine: 0,
    piedsRampesGardexVisionOptimum: 0,
    piedsLineairesRampes: 0,
    avertissementClient: '',
    dateAvertissement: '',
    avertissementPriseMesure: '',
    dateAvertissementPriseMesure: '',
    livraison: 'Non effectuée',
    statut: 'Active',
    activite: 'Installation',
    // Champs Commercial
    nombreBalcons: 0,
    nombrePoteaux: 0,
    piedsLineairesEstime: 0,
    piedsLineairesReels: 0,
    differencesPiedsLineaires: 0,
    balconsDetails: []
  };

  const [commandeForm, setCommandeForm] = useState(emptyCommandeForm);

  const representants = ['Martin Dupuis', 'Sophie Tremblay', 'Jean Gagnon', 'Marie Lavoie'];
  const services = ['Installation', 'Livraison', 'Cueillette', 'Transport'];
  const typesCommande = ['Standard', 'Commercial', 'Multi-phase', 'Multi-plan'];
  const couleurs = ['Noir', 'Blanc', 'Gris', 'Bronze', 'Argent', 'Brun'];
  //const optionsAchat = ['', 'Commandé', 'Reçu', 'En attente', 'N/A'];
  const optionsOuiNon = ['', 'Oui', 'Non'];
  const optionsAvertissement = ['', 'Par courriel', 'Par téléphone', 'En personne'];



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
              <p className="text-xs text-red-600 font-medium mt-2">Voir le calendrier →</p>
            </div>
            <div className="p-3 bg-red-50 rounded-xl text-red-500"><Icon name="wrench" size={28}/></div>
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
              <div key={cmd.id} className={`flex items-center justify-between p-3 rounded-xl border-2 ${getActiviteCardBg(cmd.activite)}`}>
                <div>
                  <p className="font-bold">{cmd.client}</p>
                  <p className="text-sm font-medium opacity-90">{cmd.num}</p>
                  <p className="text-xs font-semibold mt-1">{cmd.activite}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{cmd.dateInstallation}</p>
                  <p className="text-xs opacity-75">{cmd.equipe || 'Non assigné'}</p>
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
  // Fonctions CRUD Clients
  const openAddClient = () => {
    setEditingClient(null);
    setClientForm({
      nom: '',
      type: 'Entrepreneur',
      adresse: '',
      ville: '',
      province: 'Québec',
      pays: 'Canada',
      codePostal: '',
      telephone: '',
      cellulaire: '',
      fax: '',
      contact: '',
      emails: [''],
      communicationTexto: false,
      communicationCourriel: false,
      communicationTelephone: false,
      commentaires: ''
    });
    setShowClientModal(true);
  };

  const openEditClient = (client) => {
    setEditingClient(client);
    setClientForm({ ...client, emails: [...client.emails] });
    setShowClientModal(true);
  };

  const saveClient = () => {
    // Filtrer les emails vides
    const cleanedEmails = clientForm.emails.filter(e => e.trim() !== '');
    const clientData = { ...clientForm, emails: cleanedEmails.length > 0 ? cleanedEmails : [''] };
    
    if (editingClient) {
      setClientsList(prev => prev.map(c => c.id === editingClient.id ? { ...c, ...clientData } : c));
    } else {
      const newId = Math.max(...clientsList.map(c => c.id), 0) + 1;
      setClientsList(prev => [...prev, { id: newId, ...clientData, commandesEnCours: [] }]);
    }
    setShowClientModal(false);
  };

  const deleteClient = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce client? Cette action est irréversible.')) {
      setClientsList(prev => prev.filter(c => c.id !== id));
    }
  };

  const addEmailField = () => {
    setClientForm(prev => ({ ...prev, emails: [...prev.emails, ''] }));
  };

  const removeEmailField = (index) => {
    if (clientForm.emails.length > 1) {
      setClientForm(prev => ({ ...prev, emails: prev.emails.filter((_, i) => i !== index) }));
    }
  };

  const updateEmail = (index, value) => {
    setClientForm(prev => ({
      ...prev,
      emails: prev.emails.map((e, i) => i === index ? value : e)
    }));
  };

  // Fonction pour obtenir la couleur du badge de type
  const getTypeColor = (type) => {
    switch(type) {
      case 'Entrepreneur': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Résidentiel': return 'bg-green-100 text-green-800 border-green-200';
      case 'Distributeur': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Ambassadeur': return 'bg-amber-100 text-amber-800 border-amber-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  // Fonction pour obtenir la couleur des cercles de commandes
  const getCommandeColor = (type) => {
    switch(type) {
      case 'Livraison': return 'bg-blue-500';
      case 'Cueillette': return 'bg-yellow-400';
      case 'Installation': return 'bg-red-600';
      case 'Transport': return 'bg-green-500';
      default: return 'bg-slate-400';
    }
  };

  // === CLIENTS ===
  const Clients = () => {
    // Filtrage des clients
    const filteredClients = clientsList
      .filter(c => clientFilterType === 'tous' || c.type === clientFilterType)
      .filter(c => {
        if (!clientSearchTerm) return true;
        const search = clientSearchTerm.toLowerCase();
        return (
          c.nom.toLowerCase().includes(search) ||
          c.adresse.toLowerCase().includes(search) ||
          c.ville.toLowerCase().includes(search) ||
          c.telephone.includes(search) ||
          c.contact.toLowerCase().includes(search)
        );
      });

    return (
      <div className="space-y-6">
        {/* Modal Ajouter/Modifier Client */}
        {showClientModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
              {/* Header Modal */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-slate-50">
                <h2 className="text-2xl font-bold text-slate-800">
                  {editingClient ? 'Modifier le client' : 'Nouveau client'}
                </h2>
                <div className="flex items-center gap-2">
                  <button onClick={saveClient} className="p-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg" title="Enregistrer">
                    <Icon name="save" size={24}/>
                  </button>
                  <button onClick={() => setShowClientModal(false)} className="p-2 hover:bg-slate-200 rounded-lg" title="Fermer">
                    <Icon name="x" size={24}/>
                  </button>
                </div>
              </div>
              
              {/* Contenu scrollable */}
              <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6">
                <div className="space-y-6">
                  {/* Informations principales */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        <span className="text-red-500">*</span> Nom du client
                      </label>
                      <input 
                        type="text" 
                        value={clientForm.nom} 
                        onChange={(e) => setClientForm({...clientForm, nom: e.target.value})} 
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-400" 
                        placeholder="Nom de l'entreprise ou du client"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Type de client</label>
                      <select 
                        value={clientForm.type} 
                        onChange={(e) => setClientForm({...clientForm, type: e.target.value})} 
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-amber-400"
                      >
                        {typesClient.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Adresse */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Adresse</label>
                      <input 
                        type="text" 
                        value={clientForm.adresse} 
                        onChange={(e) => setClientForm({...clientForm, adresse: e.target.value})} 
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-400" 
                        placeholder="Numéro et rue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Ville</label>
                      <input 
                        type="text" 
                        value={clientForm.ville} 
                        onChange={(e) => setClientForm({...clientForm, ville: e.target.value})} 
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-400" 
                        placeholder="Ville"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        <span className="text-red-500">*</span> Province
                      </label>
                      <select 
                        value={clientForm.province} 
                        onChange={(e) => setClientForm({...clientForm, province: e.target.value})} 
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-amber-400"
                      >
                        {provinces.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        <span className="text-red-500">*</span> Pays
                      </label>
                      <select 
                        value={clientForm.pays} 
                        onChange={(e) => setClientForm({...clientForm, pays: e.target.value})} 
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="Canada">Canada</option>
                        <option value="États-Unis">États-Unis</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Code Postal</label>
                      <input 
                        type="text" 
                        value={clientForm.codePostal} 
                        onChange={(e) => setClientForm({...clientForm, codePostal: e.target.value.toUpperCase()})} 
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-400" 
                        placeholder="A1A 1A1"
                      />
                    </div>
                  </div>

                  {/* Préférences de communication */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">Préférences de communication</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl">
                        <span className="text-sm font-medium text-slate-700">Communication par: Texto</span>
                        <button 
                          onClick={() => setClientForm({...clientForm, communicationTexto: !clientForm.communicationTexto})}
                          className={`w-12 h-6 rounded-full transition-colors relative ${clientForm.communicationTexto ? 'bg-emerald-500' : 'bg-slate-300'}`}
                        >
                          <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${clientForm.communicationTexto ? 'translate-x-6' : 'translate-x-0.5'}`}/>
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl">
                        <span className="text-sm font-medium text-slate-700">Communication par: Courriel</span>
                        <button 
                          onClick={() => setClientForm({...clientForm, communicationCourriel: !clientForm.communicationCourriel})}
                          className={`w-12 h-6 rounded-full transition-colors relative ${clientForm.communicationCourriel ? 'bg-emerald-500' : 'bg-slate-300'}`}
                        >
                          <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${clientForm.communicationCourriel ? 'translate-x-6' : 'translate-x-0.5'}`}/>
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl">
                        <span className="text-sm font-medium text-slate-700">Communication par: Téléphone</span>
                        <button 
                          onClick={() => setClientForm({...clientForm, communicationTelephone: !clientForm.communicationTelephone})}
                          className={`w-12 h-6 rounded-full transition-colors relative ${clientForm.communicationTelephone ? 'bg-emerald-500' : 'bg-slate-300'}`}
                        >
                          <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${clientForm.communicationTelephone ? 'translate-x-6' : 'translate-x-0.5'}`}/>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Téléphones */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Téléphone</label>
                      <input 
                        type="tel" 
                        value={clientForm.telephone} 
                        onChange={(e) => setClientForm({...clientForm, telephone: e.target.value})} 
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-400" 
                        placeholder="514-555-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Cellulaire (texto)</label>
                      <input 
                        type="tel" 
                        value={clientForm.cellulaire} 
                        onChange={(e) => setClientForm({...clientForm, cellulaire: e.target.value})} 
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-400" 
                        placeholder="514-555-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Fax</label>
                      <input 
                        type="tel" 
                        value={clientForm.fax} 
                        onChange={(e) => setClientForm({...clientForm, fax: e.target.value})} 
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-400" 
                        placeholder="514-555-0000"
                      />
                    </div>
                  </div>

                  {/* Personne contact */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Personne contact</label>
                    <input 
                      type="text" 
                      value={clientForm.contact} 
                      onChange={(e) => setClientForm({...clientForm, contact: e.target.value})} 
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-400" 
                      placeholder="Nom de la personne contact"
                    />
                  </div>

                  {/* Emails dynamiques */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-semibold text-slate-700">Adresses courriel</label>
                      <button 
                        onClick={addEmailField}
                        className="text-sm text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1"
                      >
                        <Icon name="plus" size={16}/> Ajouter un courriel
                      </button>
                    </div>
                    <div className="space-y-2">
                      {clientForm.emails.map((email, index) => (
                        <div key={index} className="flex gap-2">
                          <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => updateEmail(index, e.target.value)} 
                            className="flex-1 px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-400" 
                            placeholder={`Courriel ${index + 1}`}
                          />
                          {clientForm.emails.length > 1 && (
                            <button 
                              onClick={() => removeEmailField(index)}
                              className="p-3 text-red-500 hover:bg-red-50 rounded-xl"
                            >
                              <Icon name="x" size={20}/>
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Commentaires */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Commentaires</label>
                    <textarea 
                      value={clientForm.commentaires} 
                      onChange={(e) => setClientForm({...clientForm, commentaires: e.target.value})} 
                      rows={3}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-400 resize-none" 
                      placeholder="Notes ou commentaires sur le client..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Gestion des clients</h1>
            <p className="text-slate-500 mt-1">Gérez votre base de clients</p>
          </div>
          <button 
            onClick={openAddClient}
            className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            <Icon name="plus" size={20}/>Ajouter client
          </button>
        </div>

        {/* Filtres et recherche */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Icon name="search" size={20}/>
              </div>
              <input 
                type="text" 
                value={clientSearchTerm}
                onChange={(e) => setClientSearchTerm(e.target.value)}
                placeholder="Rechercher par nom, adresse, téléphone..." 
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-400"
              />
            </div>
            <select 
              value={clientFilterType}
              onChange={(e) => setClientFilterType(e.target.value)}
              className="px-4 py-2.5 border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-amber-400"
            >
              <option value="tous">Tous les types</option>
              {typesClient.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        {/* Statistiques rapides */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-100">
            <p className="text-sm text-slate-500">Total clients</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{clientsList.length}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <p className="text-sm text-blue-600">Entrepreneurs</p>
            <p className="text-2xl font-bold text-blue-700 mt-1">{clientsList.filter(c => c.type === 'Entrepreneur').length}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border border-green-100">
            <p className="text-sm text-green-600">Résidentiels</p>
            <p className="text-2xl font-bold text-green-700 mt-1">{clientsList.filter(c => c.type === 'Résidentiel').length}</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
            <p className="text-sm text-amber-600">Ambassadeurs</p>
            <p className="text-2xl font-bold text-amber-700 mt-1">{clientsList.filter(c => c.type === 'Ambassadeur').length}</p>
          </div>
        </div>

        {/* Tableau des clients */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Client</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Type</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Contact</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Téléphone</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Commandes en cours</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredClients.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-slate-500">
                      Aucun client trouvé
                    </td>
                  </tr>
                ) : (
                  filteredClients.map(client => (
                    <tr key={client.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-800">{client.nom}</div>
                        <div className="text-sm text-slate-500">{client.emails[0]}</div>
                        <div className="text-xs text-slate-400 mt-1">{client.adresse}, {client.ville}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(client.type)}`}>
                          {client.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{client.contact}</td>
                      <td className="px-6 py-4 text-slate-600">{client.telephone}</td>
                      <td className="px-6 py-4">
                        {client.commandesEnCours.length === 0 ? (
                          <span className="text-slate-400 text-sm">Aucune</span>
                        ) : (
                          <div className="flex flex-wrap gap-1">
                            {client.commandesEnCours.map((cmd, idx) => (
                              <div key={idx} className="flex items-center gap-1" title={`${cmd.count} ${cmd.type}`}>
                                {[...Array(cmd.count)].map((_, i) => (
                                  <div 
                                    key={i} 
                                    className={`w-4 h-4 rounded-full ${getCommandeColor(cmd.type)} border-2 border-white shadow-sm`}
                                    title={cmd.type}
                                  />
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-1">
                          <button 
                            onClick={() => openEditClient(client)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Modifier"
                          >
                            <Icon name="edit" size={18}/>
                          </button>
                          <button 
                            onClick={() => deleteClient(client.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Supprimer"
                          >
                            <Icon name="x" size={18}/>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Légende des couleurs */}
        <div className="bg-slate-50 rounded-xl p-4 flex flex-wrap items-center gap-4 text-sm">
          <span className="text-slate-600 font-medium">Légende commandes:</span>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <span className="text-slate-600">Livraison</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
            <span className="text-slate-600">Cueillette</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-600"></div>
            <span className="text-slate-600">Installation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span className="text-slate-600">Transport</span>
          </div>
        </div>
      </div>
    );
  };

  // === COMMANDES ===
 // === ÉTATS COMMANDES ===
  
  
  // Générer les détails de balcons
  const generateBalconsDetails = (nombre) => {
    const details = [];
    for (let i = 1; i <= nombre; i++) {
      details.push({
        id: i,
        balcon: '',
        coutBalcon: 0,
        piedsLineaires: 0,
        poteaux: 0,
        produit: false,
        installationTerminee: false,
        reprise: false
      });
    }
    return details;
  };

  const updateBalconDetail = (index, field, value) => {
    const newDetails = [...commandeForm.balconsDetails];
    newDetails[index] = { ...newDetails[index], [field]: value };
    
    // Calculer automatiquement les totaux
    const totalPiedsLineaires = newDetails.reduce((acc, b) => acc + (parseFloat(b.piedsLineaires) || 0), 0);
    const totalPoteaux = newDetails.reduce((acc, b) => acc + (parseFloat(b.poteaux) || 0), 0);
    
    setCommandeForm({
      ...commandeForm,
      balconsDetails: newDetails,
      piedsLineairesReels: totalPiedsLineaires,
      nombrePoteaux: totalPoteaux,
      differencesPiedsLineaires: totalPiedsLineaires - (commandeForm.piedsLineairesEstime || 0)
    });
  };

  const openAddCommande = () => {
    setEditingCommande(null);
    setCommandeForm({
      ...emptyCommandeForm,
      num: `CMD-${new Date().getFullYear()}-${String(commandesList.length + 1).padStart(3, '0')}`,
      dateEntree: new Date().toISOString().split('T')[0]
    });
    setCommandeFormSection(1);
    setShowCommandeModal(true);
  };

  const openEditCommande = (commande) => {
    setEditingCommande(commande);
    setCommandeForm({ ...commande });
    setCommandeFormSection(1);
    setShowCommandeModal(true);
  };

  const saveCommande = () => {
    if (editingCommande) {
      setCommandesList(prev => prev.map(c => c.id === editingCommande.id ? { ...c, ...commandeForm } : c));
    } else {
      const newId = Math.max(...commandesList.map(c => c.id), 0) + 1;
      setCommandesList(prev => [...prev, { id: newId, ...commandeForm }]);
    }
    setShowCommandeModal(false);
  };

  const deleteCommande = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette commande?')) {
      setCommandesList(prev => prev.filter(c => c.id !== id));
    }
  };

  const completeCommande = (id) => {
    setCommandesList(prev => prev.map(c => c.id === id ? { ...c, statut: 'Complétée', dateCompletion: new Date().toISOString().split('T')[0] } : c));
  };

  // Obtenir les clients uniques
  const uniqueClients = [...new Set(commandesList.map(c => c.client))];
  const uniqueRepresentants = [...new Set(commandesList.map(c => c.representant))];

  // === COMMANDES ===
  const Commandes = () => {
    // Filtrage
    const filteredCommandes = commandesList
      .filter(cmd => commandeTab === 'actives' ? cmd.statut === 'Active' : cmd.statut === 'Complétée')
      .filter(cmd => commandeFilterClient === 'tous' || cmd.client === commandeFilterClient)
      .filter(cmd => commandeFilterRepresentant === 'tous' || cmd.representant === commandeFilterRepresentant)
      .filter(cmd => commandeFilterService === 'tous' || cmd.service === commandeFilterService)
      .filter(cmd => {
        if (!commandeSearchTerm) return true;
        const search = commandeSearchTerm.toLowerCase();
        return (
          cmd.num.toLowerCase().includes(search) ||
          cmd.client.toLowerCase().includes(search) ||
          cmd.reference?.toLowerCase().includes(search) ||
          cmd.ville?.toLowerCase().includes(search)
        );
      });

    // ==== VUE DÉTAILLÉE ====
    if (selectedCommandeDetail) {
      const cmd = commandesList.find(c => c.id === selectedCommandeDetail.id) || selectedCommandeDetail;
      
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <button onClick={() => setSelectedCommandeDetail(null)} className="p-2 hover:bg-slate-100 rounded-lg">
              <Icon name="left" size={24}/>
            </button>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-slate-800">Commande {cmd.num}</h1>
              <p className="text-slate-500 mt-1">{cmd.client} • {cmd.typeCommande}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => openEditCommande(cmd)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2.5 rounded-xl flex items-center gap-2">
                <Icon name="edit" size={18}/>Modifier
              </button>
              {cmd.statut === 'Active' && (
                <button onClick={() => { completeCommande(cmd.id); setSelectedCommandeDetail(null); }} className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2.5 rounded-xl flex items-center gap-2">
                  <Icon name="check" size={18}/>Compléter
                </button>
              )}
            </div>
          </div>

          {/* Informations principales */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Info générale */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h2 className="text-lg font-bold text-slate-800 mb-4">Informations générales</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div><label className="text-xs text-slate-500 uppercase">N° Commande</label><p className="font-semibold text-slate-800">{cmd.num}</p></div>
                  <div><label className="text-xs text-slate-500 uppercase">Référence</label><p className="font-semibold text-slate-800">{cmd.reference || '—'}</p></div>
                  <div><label className="text-xs text-slate-500 uppercase">Client</label><p className="font-semibold text-slate-800">{cmd.client}</p></div>
                  <div><label className="text-xs text-slate-500 uppercase">Représentant</label><p className="font-semibold text-slate-800">{cmd.representant}</p></div>
                  <div><label className="text-xs text-slate-500 uppercase">Service</label><p className="font-semibold text-slate-800">{cmd.service}</p></div>
                  <div><label className="text-xs text-slate-500 uppercase">Type</label><p className="font-semibold text-slate-800">{cmd.typeCommande}</p></div>
                  <div><label className="text-xs text-slate-500 uppercase">Ville</label><p className="font-semibold text-slate-800">{cmd.ville || '—'}</p></div>
                  <div><label className="text-xs text-slate-500 uppercase">Livraison</label>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${cmd.livraison === 'Effectuée' ? 'bg-emerald-100 text-emerald-800' : 'bg-orange-100 text-orange-800'}`}>{cmd.livraison}</span>
                  </div>
                </div>
                {cmd.commentaire && (
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl">
                    <p className="text-sm text-amber-800"><strong>Commentaire:</strong> {cmd.commentaire}</p>
                  </div>
                )}
              </div>

              {/* Dates */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h2 className="text-lg font-bold text-slate-800 mb-4">Dates</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div><label className="text-xs text-slate-500 uppercase">Date d'entrée</label><p className="font-semibold text-slate-800">{cmd.dateEntree || '—'}</p></div>
                  <div><label className="text-xs text-slate-500 uppercase">Date prévue</label><p className="font-semibold text-slate-800">{cmd.datePrevue || '—'}</p></div>
                  <div><label className="text-xs text-slate-500 uppercase">Date production</label><p className="font-semibold text-slate-800">{cmd.dateProduction || '—'}</p></div>
                  <div><label className="text-xs text-slate-500 uppercase">Prise de mesure</label><p className="font-semibold text-slate-800">{cmd.datePriseMesure || '—'}</p></div>
                  <div><label className="text-xs text-slate-500 uppercase">Date livraison</label><p className="font-semibold text-slate-800">{cmd.dateLivraison || '—'}</p></div>
                  <div><label className="text-xs text-slate-500 uppercase">Mesure donnée le</label><p className="font-semibold text-slate-800">{cmd.mesureDonneeLe || '—'}</p></div>
                </div>
              </div>

              {/* Prix et mesures */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h2 className="text-lg font-bold text-slate-800 mb-4">Prix et mesures</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div><label className="text-xs text-slate-500 uppercase">Prix matériaux</label><p className="font-semibold text-slate-800">{cmd.prixVenteMateriaux?.toLocaleString() || 0} $</p></div>
                  <div><label className="text-xs text-slate-500 uppercase">Prix installation</label><p className="font-semibold text-slate-800">{cmd.prixVenteInstallation?.toLocaleString() || 0} $</p></div>
                  <div><label className="text-xs text-slate-500 uppercase">Temps estimé</label><p className="font-semibold text-slate-800">{cmd.tempsEstimeInstallation || 0} h</p></div>
                  <div><label className="text-xs text-slate-500 uppercase">Pi² fibre</label><p className="font-semibold text-slate-800">{cmd.piedsCarresFibre || 0}</p></div>
                  <div><label className="text-xs text-slate-500 uppercase">Pieds linéaires</label><p className="font-semibold text-slate-800">{cmd.piedsLineairesRampes || 0}</p></div>
                  <div><label className="text-xs text-slate-500 uppercase">Couleur</label><p className="font-semibold text-slate-800">{cmd.couleur || '—'}</p></div>
                </div>
              </div>

              {/* Section Commercial */}
              {cmd.typeCommande === 'Commercial' && cmd.balconsDetails && cmd.balconsDetails.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                  <h2 className="text-lg font-bold text-slate-800 mb-4">Détails Commercial - Balcons</h2>
                  <div className="grid grid-cols-4 gap-4 mb-4 p-4 bg-slate-50 rounded-xl">
                    <div><label className="text-xs text-slate-500 uppercase">Nb Balcons</label><p className="text-2xl font-bold text-slate-800">{cmd.nombreBalcons}</p></div>
                    <div><label className="text-xs text-slate-500 uppercase">Pieds lin. estimés</label><p className="text-2xl font-bold text-slate-800">{cmd.piedsLineairesEstime}</p></div>
                    <div><label className="text-xs text-slate-500 uppercase">Pieds lin. réels</label><p className="text-2xl font-bold text-emerald-600">{cmd.piedsLineairesReels}</p></div>
                    <div><label className="text-xs text-slate-500 uppercase">Différence</label><p className={`text-2xl font-bold ${cmd.differencesPiedsLineaires >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>{cmd.differencesPiedsLineaires}</p></div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-100">
                        <tr>
                          <th className="px-3 py-2 text-left">#</th>
                          <th className="px-3 py-2 text-left">Balcon</th>
                          <th className="px-3 py-2 text-right">Coût</th>
                          <th className="px-3 py-2 text-right">Pi. Lin.</th>
                          <th className="px-3 py-2 text-right">Poteaux</th>
                          <th className="px-3 py-2 text-center">Produit</th>
                          <th className="px-3 py-2 text-center">Inst. Term.</th>
                          <th className="px-3 py-2 text-center">Reprise</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cmd.balconsDetails.map((b, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                            <td className="px-3 py-2 font-medium">{b.id}</td>
                            <td className="px-3 py-2">{b.balcon}</td>
                            <td className="px-3 py-2 text-right">{b.coutBalcon?.toLocaleString()} $</td>
                            <td className="px-3 py-2 text-right">{b.piedsLineaires}</td>
                            <td className="px-3 py-2 text-right">{b.poteaux}</td>
                            <td className="px-3 py-2 text-center">{b.produit ? '✓' : '—'}</td>
                            <td className="px-3 py-2 text-center">{b.installationTerminee ? '✓' : '—'}</td>
                            <td className="px-3 py-2 text-center">{b.reprise ? '✓' : '—'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Colonne droite */}
            <div className="space-y-6">
              {/* Statut */}
              <div className={`rounded-2xl p-6 ${cmd.statut === 'Active' ? 'bg-emerald-500' : 'bg-slate-500'} text-white`}>
                <h2 className="text-lg font-bold mb-2">Statut</h2>
                <p className="text-3xl font-bold">{cmd.statut}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getActiviteBgColor(cmd.activite)} ${getActiviteColor(cmd.activite)}`}>{cmd.activite}</span>
                  {cmd.projet && <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20">Projet</span>}
                  {cmd.reprise && <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20">Reprise</span>}
                  {cmd.structure && <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20">Structure</span>}
                </div>
              </div>

              {/* Production */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h2 className="text-lg font-bold text-slate-800 mb-4">Production</h2>
                <div className="space-y-3">
                  {[
                    { label: 'Mesure', value: cmd.mesure },
                    { label: 'Plan', value: cmd.plan },
                    { label: 'Envoyé en production', value: cmd.envoyeProduction },
                    { label: 'Production terminée', value: cmd.productionTerminee },
                    { label: 'Terminé', value: cmd.termine },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">{item.label}</span>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${item.value === 'Oui' ? 'bg-emerald-100 text-emerald-800' : item.value === 'Non' ? 'bg-red-100 text-red-800' : 'bg-slate-100 text-slate-600'}`}>
                        {item.value || '—'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achats */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h2 className="text-lg font-bold text-slate-800 mb-4">Achats</h2>
                <div className="space-y-2 text-sm">
                  {[
                    { label: 'Fibre', value: cmd.achatFibre, date: cmd.dateReceptionFibre },
                    { label: 'Limons', value: cmd.achatLimons, date: cmd.dateReceptionLimons },
                    { label: 'Verres', value: cmd.achatVerres, date: cmd.dateReceptionVerre },
                    { label: 'Colonnes', value: cmd.achatColonnes, date: cmd.dateReceptionColonnes },
                    { label: 'Peinture', value: cmd.achatPeinture, date: cmd.dateReceptionPeinture },
                    { label: 'Attaches', value: cmd.achatAttaches, date: cmd.dateReceptionAttaches },
                    { label: 'Plancher alu.', value: cmd.achatPlancherAluminium, date: cmd.dateReceptionPlancherAluminium },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1 border-b border-slate-100 last:border-0">
                      <span className="text-slate-600">{item.label}</span>
                      <div className="text-right">
                        <span className={`px-2 py-0.5 rounded text-xs font-semibold ${item.value === 'Reçu' ? 'bg-emerald-100 text-emerald-800' : item.value === 'Commandé' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-500'}`}>
                          {item.value || '—'}
                        </span>
                        {item.date && <p className="text-xs text-slate-400 mt-0.5">{item.date}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // ==== MODAL FORMULAIRE ====
    const renderCommandeModal = () => (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
            <h2 className="text-xl font-bold text-slate-800">
              {editingCommande ? `Modifier ${editingCommande.num}` : 'Nouvelle commande'}
            </h2>
            <div className="flex items-center gap-2">
              <button onClick={saveCommande} className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg flex items-center gap-2">
                <Icon name="save" size={18}/>Enregistrer
              </button>
              <button onClick={() => setShowCommandeModal(false)} className="p-2 hover:bg-slate-200 rounded-lg">
                <Icon name="x" size={24}/>
              </button>
            </div>
          </div>

          {/* Navigation sections */}
          <div className="flex gap-1 p-2 bg-slate-100 overflow-x-auto">
            {['Général', 'Dates & Prix', 'Production', 'Achats', 'Rampes', 'Commercial'].map((section, idx) => (
              <button
                key={idx}
                onClick={() => setCommandeFormSection(idx + 1)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${commandeFormSection === idx + 1 ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600 hover:bg-white/50'}`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Contenu */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Section 1: Général */}
            {commandeFormSection === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2"><span className="text-red-500">*</span> N° Commande</label>
                    <input type="text" value={commandeForm.num} onChange={(e) => setCommandeForm({...commandeForm, num: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nom du client</label>
                    <select value={commandeForm.client} onChange={(e) => setCommandeForm({...commandeForm, client: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white">
                      <option value="">Sélectionner un client</option>
                      {clientsList.map(c => <option key={c.id} value={c.nom}>{c.nom}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Référence</label>
                    <input type="text" value={commandeForm.reference} onChange={(e) => setCommandeForm({...commandeForm, reference: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Commentaire</label>
                  <textarea value={commandeForm.commentaire} onChange={(e) => setCommandeForm({...commandeForm, commentaire: e.target.value})} rows={3} className="w-full px-4 py-3 border border-slate-200 rounded-xl resize-none"/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Représentant</label>
                    <select value={commandeForm.representant} onChange={(e) => setCommandeForm({...commandeForm, representant: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white">
                      <option value="">Sélectionner</option>
                      {representants.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Service</label>
                    <select value={commandeForm.service} onChange={(e) => setCommandeForm({...commandeForm, service: e.target.value, activite: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white">
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Ville</label>
                    <input type="text" value={commandeForm.ville} onChange={(e) => setCommandeForm({...commandeForm, ville: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Type de commande</label>
                    <select 
                      value={commandeForm.typeCommande} 
                      onChange={(e) => {
                        const type = e.target.value;
                        setCommandeForm({
                          ...commandeForm, 
                          typeCommande: type,
                          balconsDetails: type === 'Commercial' ? generateBalconsDetails(commandeForm.nombreBalcons || 0) : []
                        });
                      }} 
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white"
                    >
                      {typesCommande.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Statut livraison</label>
                    <select value={commandeForm.livraison} onChange={(e) => setCommandeForm({...commandeForm, livraison: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white">
                      <option value="Non effectuée">Non effectuée</option>
                      <option value="Effectuée">Effectuée</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl">
                    <span className="text-sm font-medium text-slate-700">Projet</span>
                    <button onClick={() => setCommandeForm({...commandeForm, projet: !commandeForm.projet})} className={`w-12 h-6 rounded-full transition-colors relative ${commandeForm.projet ? 'bg-emerald-500' : 'bg-slate-300'}`}>
                      <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${commandeForm.projet ? 'translate-x-6' : 'translate-x-0.5'}`}/>
                    </button>
                  </div>
                  <div className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl">
                    <span className="text-sm font-medium text-slate-700">Reprise</span>
                    <button onClick={() => setCommandeForm({...commandeForm, reprise: !commandeForm.reprise})} className={`w-12 h-6 rounded-full transition-colors relative ${commandeForm.reprise ? 'bg-emerald-500' : 'bg-slate-300'}`}>
                      <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${commandeForm.reprise ? 'translate-x-6' : 'translate-x-0.5'}`}/>
                    </button>
                  </div>
                  <div className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl">
                    <span className="text-sm font-medium text-slate-700">Structure</span>
                    <button onClick={() => setCommandeForm({...commandeForm, structure: !commandeForm.structure})} className={`w-12 h-6 rounded-full transition-colors relative ${commandeForm.structure ? 'bg-emerald-500' : 'bg-slate-300'}`}>
                      <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${commandeForm.structure ? 'translate-x-6' : 'translate-x-0.5'}`}/>
                    </button>
                  </div>
                  <div className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl">
                    <span className="text-sm font-medium text-slate-700">Temps inst.</span>
                    <button onClick={() => setCommandeForm({...commandeForm, mettreTempInstallation: !commandeForm.mettreTempInstallation})} className={`w-12 h-6 rounded-full transition-colors relative ${commandeForm.mettreTempInstallation ? 'bg-emerald-500' : 'bg-slate-300'}`}>
                      <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${commandeForm.mettreTempInstallation ? 'translate-x-6' : 'translate-x-0.5'}`}/>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Section 2: Dates & Prix */}
            {commandeFormSection === 2 && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-800">Dates</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Date d'entrée du dossier</label>
                    <input type="date" value={commandeForm.dateEntree} onChange={(e) => setCommandeForm({...commandeForm, dateEntree: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Date prévue</label>
                    <input type="date" value={commandeForm.datePrevue} onChange={(e) => setCommandeForm({...commandeForm, datePrevue: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Date de production</label>
                    <input type="date" value={commandeForm.dateProduction} onChange={(e) => setCommandeForm({...commandeForm, dateProduction: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Date de prise de mesure</label>
                    <input type="date" value={commandeForm.datePriseMesure} onChange={(e) => setCommandeForm({...commandeForm, datePriseMesure: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Date de livraison</label>
                    <input type="date" value={commandeForm.dateLivraison} onChange={(e) => setCommandeForm({...commandeForm, dateLivraison: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Mesure donnée le</label>
                    <input type="date" value={commandeForm.mesureDonneeLe} onChange={(e) => setCommandeForm({...commandeForm, mesureDonneeLe: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-800 pt-4">Prix et mesures</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Prix vente matériaux ($)</label>
                    <input type="number" value={commandeForm.prixVenteMateriaux} onChange={(e) => setCommandeForm({...commandeForm, prixVenteMateriaux: parseFloat(e.target.value) || 0})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Prix vente installation ($)</label>
                    <input type="number" value={commandeForm.prixVenteInstallation} onChange={(e) => setCommandeForm({...commandeForm, prixVenteInstallation: parseFloat(e.target.value) || 0})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Temps estimé installation (h)</label>
                    <input type="number" value={commandeForm.tempsEstimeInstallation} onChange={(e) => setCommandeForm({...commandeForm, tempsEstimeInstallation: parseFloat(e.target.value) || 0})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Pieds carrés de fibre</label>
                    <input type="number" value={commandeForm.piedsCarresFibre} onChange={(e) => setCommandeForm({...commandeForm, piedsCarresFibre: parseFloat(e.target.value) || 0})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-800 pt-4">Avertissements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Avertissement du client</label>
                    <select value={commandeForm.avertissementClient} onChange={(e) => setCommandeForm({...commandeForm, avertissementClient: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white">
                      {optionsAvertissement.map(o => <option key={o} value={o}>{o || 'Sélectionner'}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Date de l'avertissement</label>
                    <input type="date" value={commandeForm.dateAvertissement} onChange={(e) => setCommandeForm({...commandeForm, dateAvertissement: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Avertissement prise de mesure</label>
                    <select value={commandeForm.avertissementPriseMesure} onChange={(e) => setCommandeForm({...commandeForm, avertissementPriseMesure: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white">
                      {optionsAvertissement.map(o => <option key={o} value={o}>{o || 'Sélectionner'}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Date avertissement prise de mesure</label>
                    <input type="date" value={commandeForm.dateAvertissementPriseMesure} onChange={(e) => setCommandeForm({...commandeForm, dateAvertissementPriseMesure: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                </div>
              </div>
            )}

            {/* Section 3: Production */}
            {commandeFormSection === 3 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Mesure</label>
                    <select value={commandeForm.mesure} onChange={(e) => setCommandeForm({...commandeForm, mesure: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white">
                      {optionsOuiNon.map(o => <option key={o} value={o}>{o || 'Sélectionner'}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Plan</label>
                    <select value={commandeForm.plan} onChange={(e) => setCommandeForm({...commandeForm, plan: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white">
                      {optionsOuiNon.map(o => <option key={o} value={o}>{o || 'Sélectionner'}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Envoyé en production</label>
                    <select value={commandeForm.envoyeProduction} onChange={(e) => setCommandeForm({...commandeForm, envoyeProduction: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white">
                      {optionsOuiNon.map(o => <option key={o} value={o}>{o || 'Sélectionner'}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Production terminée</label>
                    <select value={commandeForm.productionTerminee} onChange={(e) => setCommandeForm({...commandeForm, productionTerminee: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white">
                      {optionsOuiNon.map(o => <option key={o} value={o}>{o || 'Sélectionner'}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Terminé</label>
                    <select value={commandeForm.termine} onChange={(e) => setCommandeForm({...commandeForm, termine: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white">
                      {optionsOuiNon.map(o => <option key={o} value={o}>{o || 'Sélectionner'}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Couleur</label>
                    <select value={commandeForm.couleur} onChange={(e) => setCommandeForm({...commandeForm, couleur: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white">
                      <option value="">Sélectionner</option>
                      {couleurs.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Section 4: Achats */}
            {commandeFormSection === 4 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: 'Fibre', achat: 'achatFibre', date: 'dateReceptionFibre' },
                    { label: 'Limons', achat: 'achatLimons', date: 'dateReceptionLimons' },
                    { label: 'Verres', achat: 'achatVerres', date: 'dateReceptionVerre' },
                    { label: 'Colonnes', achat: 'achatColonnes', date: 'dateReceptionColonnes' },
                    { label: 'Peinture', achat: 'achatPeinture', date: 'dateReceptionPeinture' },
                    { label: 'Attaches', achat: 'achatAttaches', date: 'dateReceptionAttaches' },
                    { label: 'Plancher aluminium', achat: 'achatPlancherAluminium', date: 'dateReceptionPlancherAluminium' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 border border-slate-200 rounded-xl">
                      <h4 className="font-semibold text-slate-800 mb-3">Achat de {item.label.toLowerCase()}</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs text-slate-500 mb-1">Statut</label>
                          <select value={commandeForm[item.achat]} onChange={(e) => setCommandeForm({...commandeForm, [item.achat]: e.target.value})} className="w-full px-3 py-2 border border-slate-200 rounded-lg bg-white text-sm">
                            {optionsAchat.map(o => <option key={o} value={o}>{o || 'Non commandé'}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-slate-500 mb-1">Date de réception</label>
                          <input type="date" value={commandeForm[item.date]} onChange={(e) => setCommandeForm({...commandeForm, [item.date]: e.target.value})} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"/>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 5: Rampes */}
            {commandeFormSection === 5 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Pieds rampes en barrotin</label>
                    <input type="number" value={commandeForm.piedsRampesBarrotin} onChange={(e) => setCommandeForm({...commandeForm, piedsRampesBarrotin: parseFloat(e.target.value) || 0})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Pieds rampes en verre</label>
                    <input type="number" value={commandeForm.piedsRampesVerre} onChange={(e) => setCommandeForm({...commandeForm, piedsRampesVerre: parseFloat(e.target.value) || 0})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Pieds rampes mur intimité</label>
                    <input type="number" value={commandeForm.piedsRampesMurIntimite} onChange={(e) => setCommandeForm({...commandeForm, piedsRampesMurIntimite: parseFloat(e.target.value) || 0})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Pieds rampes main double</label>
                    <input type="number" value={commandeForm.piedsRampesMainDouble} onChange={(e) => setCommandeForm({...commandeForm, piedsRampesMainDouble: parseFloat(e.target.value) || 0})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Pieds Gardex Vision</label>
                    <input type="number" value={commandeForm.piedsRampesGardexVision} onChange={(e) => setCommandeForm({...commandeForm, piedsRampesGardexVision: parseFloat(e.target.value) || 0})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Pieds Gardex Vision Urbaine</label>
                    <input type="number" value={commandeForm.piedsRampesGardexVisionUrbaine} onChange={(e) => setCommandeForm({...commandeForm, piedsRampesGardexVisionUrbaine: parseFloat(e.target.value) || 0})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Pieds Gardex Vision Optimum</label>
                    <input type="number" value={commandeForm.piedsRampesGardexVisionOptimum} onChange={(e) => setCommandeForm({...commandeForm, piedsRampesGardexVisionOptimum: parseFloat(e.target.value) || 0})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Pieds linéaires de rampes (total)</label>
                    <input type="number" value={commandeForm.piedsLineairesRampes} onChange={(e) => setCommandeForm({...commandeForm, piedsLineairesRampes: parseFloat(e.target.value) || 0})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                  </div>
                </div>
              </div>
            )}

            {/* Section 6: Commercial */}
            {commandeFormSection === 6 && (
              <div className="space-y-6">
                {commandeForm.typeCommande !== 'Commercial' ? (
                  <div className="text-center py-12 text-slate-500">
                    <p>Cette section est réservée aux commandes de type <strong>Commercial</strong>.</p>
                    <p className="text-sm mt-2">Changez le type de commande dans la section Général pour accéder à ces options.</p>
                  </div>
                ) : (
                  <>
                    <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl">
                      <p className="text-purple-800 font-medium">Commande commerciale - Remplissez les informations des balcons</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2"><span className="text-red-500">*</span> Nombre de balcons</label>
                        <input 
                          type="number" 
                          value={commandeForm.nombreBalcons} 
                          onChange={(e) => {
                            const nb = parseInt(e.target.value) || 0;
                            setCommandeForm({
                              ...commandeForm, 
                              nombreBalcons: nb,
                              balconsDetails: generateBalconsDetails(nb)
                            });
                          }} 
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2"><span className="text-red-500">*</span> Pieds linéaires estimés</label>
                        <input type="number" value={commandeForm.piedsLineairesEstime} onChange={(e) => setCommandeForm({...commandeForm, piedsLineairesEstime: parseFloat(e.target.value) || 0, differencesPiedsLineaires: (commandeForm.piedsLineairesReels || 0) - (parseFloat(e.target.value) || 0)})} className="w-full px-4 py-3 border border-slate-200 rounded-xl"/>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Pieds linéaires réels</label>
                        <input type="number" value={commandeForm.piedsLineairesReels} readOnly className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50"/>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Différence</label>
                        <input type="number" value={commandeForm.differencesPiedsLineaires} readOnly className={`w-full px-4 py-3 border rounded-xl ${commandeForm.differencesPiedsLineaires >= 0 ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-red-50 border-red-200 text-red-700'}`}/>
                      </div>
                    </div>

                    {commandeForm.balconsDetails.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-lg font-bold text-slate-800 mb-4">Détails par balcon</h3>
                        <div className="overflow-x-auto border border-slate-200 rounded-xl">
                          <table className="w-full text-sm">
                            <thead className="bg-slate-100">
                              <tr>
                                <th className="px-3 py-3 text-left font-semibold">#</th>
                                <th className="px-3 py-3 text-left font-semibold">Balcon</th>
                                <th className="px-3 py-3 text-left font-semibold">Coût ($)</th>
                                <th className="px-3 py-3 text-left font-semibold">Pieds lin.</th>
                                <th className="px-3 py-3 text-left font-semibold">Poteaux</th>
                                <th className="px-3 py-3 text-center font-semibold">Produit</th>
                                <th className="px-3 py-3 text-center font-semibold">Inst. terminée</th>
                                <th className="px-3 py-3 text-center font-semibold">Reprise</th>
                              </tr>
                            </thead>
                            <tbody>
                              {commandeForm.balconsDetails.map((balcon, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                  <td className="px-3 py-2 font-medium">{balcon.id}</td>
                                  <td className="px-3 py-2">
                                    <input type="text" value={balcon.balcon} onChange={(e) => updateBalconDetail(idx, 'balcon', e.target.value)} className="w-full px-2 py-1 border border-slate-200 rounded text-sm"/>
                                  </td>
                                  <td className="px-3 py-2">
                                    <input type="number" value={balcon.coutBalcon} onChange={(e) => updateBalconDetail(idx, 'coutBalcon', parseFloat(e.target.value) || 0)} className="w-full px-2 py-1 border border-slate-200 rounded text-sm"/>
                                  </td>
                                  <td className="px-3 py-2">
                                    <input type="number" value={balcon.piedsLineaires} onChange={(e) => updateBalconDetail(idx, 'piedsLineaires', parseFloat(e.target.value) || 0)} className="w-full px-2 py-1 border border-slate-200 rounded text-sm"/>
                                  </td>
                                  <td className="px-3 py-2">
                                    <input type="number" value={balcon.poteaux} onChange={(e) => updateBalconDetail(idx, 'poteaux', parseFloat(e.target.value) || 0)} className="w-full px-2 py-1 border border-slate-200 rounded text-sm"/>
                                  </td>
                                  <td className="px-3 py-2 text-center">
                                    <input type="checkbox" checked={balcon.produit} onChange={(e) => updateBalconDetail(idx, 'produit', e.target.checked)} className="w-4 h-4 accent-emerald-500"/>
                                  </td>
                                  <td className="px-3 py-2 text-center">
                                    <input type="checkbox" checked={balcon.installationTerminee} onChange={(e) => updateBalconDetail(idx, 'installationTerminee', e.target.checked)} className="w-4 h-4 accent-emerald-500"/>
                                  </td>
                                  <td className="px-3 py-2 text-center">
                                    <input type="checkbox" checked={balcon.reprise} onChange={(e) => updateBalconDetail(idx, 'reprise', e.target.checked)} className="w-4 h-4 accent-red-500"/>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                            <tfoot className="bg-slate-200 font-semibold">
                              <tr>
                                <td className="px-3 py-2" colSpan={2}>TOTAL</td>
                                <td className="px-3 py-2">{commandeForm.balconsDetails.reduce((a, b) => a + (b.coutBalcon || 0), 0).toLocaleString()} $</td>
                                <td className="px-3 py-2">{commandeForm.piedsLineairesReels}</td>
                                <td className="px-3 py-2">{commandeForm.nombrePoteaux}</td>
                                <td colSpan={3}></td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );

    // ==== LISTE PRINCIPALE ====
    return (
      <div className="space-y-6">
        {showCommandeModal && renderCommandeModal()}

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Gestion des commandes</h1>
            <p className="text-slate-500 mt-1">Suivez et gérez toutes vos commandes</p>
          </div>
          <button onClick={openAddCommande} className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
            <Icon name="plus" size={20}/>Nouvelle commande
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 bg-slate-100 p-1 rounded-xl w-fit">
          <button onClick={() => setCommandeTab('actives')} className={`px-5 py-2.5 rounded-lg font-medium transition-all ${commandeTab === 'actives' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
            Actives ({commandesList.filter(c => c.statut === 'Active').length})
          </button>
          <button onClick={() => setCommandeTab('completes')} className={`px-5 py-2.5 rounded-lg font-medium transition-all ${commandeTab === 'completes' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
            Complétées ({commandesList.filter(c => c.statut === 'Complétée').length})
          </button>
        </div>

        {/* Filtres */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative lg:col-span-1">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><Icon name="search" size={20}/></div>
              <input 
                type="text" 
                value={commandeSearchTerm}
                onChange={(e) => setCommandeSearchTerm(e.target.value)}
                placeholder="Rechercher..." 
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-400"
              />
            </div>
            <select value={commandeFilterClient} onChange={(e) => setCommandeFilterClient(e.target.value)} className="px-4 py-2.5 border border-slate-200 rounded-xl bg-white">
              <option value="tous">Tous les clients</option>
              {uniqueClients.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={commandeFilterRepresentant} onChange={(e) => setCommandeFilterRepresentant(e.target.value)} className="px-4 py-2.5 border border-slate-200 rounded-xl bg-white">
              <option value="tous">Tous les représentants</option>
              {uniqueRepresentants.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
            <select value={commandeFilterService} onChange={(e) => setCommandeFilterService(e.target.value)} className="px-4 py-2.5 border border-slate-200 rounded-xl bg-white">
              <option value="tous">Tous les services</option>
              {services.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <button 
              onClick={() => { setCommandeSearchTerm(''); setCommandeFilterClient('tous'); setCommandeFilterRepresentant('tous'); setCommandeFilterService('tous'); }}
              className="px-4 py-2.5 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-2"
            >
              <Icon name="x" size={16}/>Réinitialiser
            </button>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-100">
            <p className="text-sm text-slate-500">Total affiché</p>
            <p className="text-2xl font-bold text-slate-800">{filteredCommandes.length}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <p className="text-sm text-blue-600">Livraisons</p>
            <p className="text-2xl font-bold text-blue-700">{filteredCommandes.filter(c => c.service === 'Livraison').length}</p>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border border-red-100">
            <p className="text-sm text-red-600">Installations</p>
            <p className="text-2xl font-bold text-red-700">{filteredCommandes.filter(c => c.service === 'Installation').length}</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100">
            <p className="text-sm text-yellow-600">Cueillettes</p>
            <p className="text-2xl font-bold text-yellow-700">{filteredCommandes.filter(c => c.service === 'Cueillette').length}</p>
          </div>
        </div>

        {/* Tableau */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">N° Commande</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Client</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Type</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Service</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Date prévue</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Livraison</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredCommandes.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center text-slate-500">Aucune commande trouvée</td>
                  </tr>
                ) : (
                  filteredCommandes.map(cmd => (
                    <tr key={cmd.id} className={`${getActiviteRowBg(cmd.service)} hover:bg-opacity-75 transition-colors cursor-pointer`} onClick={() => setSelectedCommandeDetail(cmd)}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className={`inline-block px-3 py-1.5 rounded-lg border-2 shadow-sm ${getActiviteCardBg(cmd.service)}`}>
                            <span className="font-mono font-bold text-sm">{cmd.num}</span>
                          </div>
                          {cmd.commentaire && (
                            <div className="relative group">
                              <div className="w-6 h-6 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center cursor-pointer">
                                <Icon name="mail" size={14}/>
                              </div>
                              <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block z-10">
                                <div className="bg-slate-800 text-white text-xs rounded-lg p-3 max-w-xs shadow-lg">
                                  {cmd.commentaire}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-800">{cmd.client}</div>
                        <div className="text-sm text-slate-500">{cmd.representant}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          cmd.typeCommande === 'Standard' ? 'bg-blue-100 text-blue-800' : 
                          cmd.typeCommande === 'Commercial' ? 'bg-purple-100 text-purple-800' : 
                          cmd.typeCommande === 'Multi-phase' ? 'bg-orange-100 text-orange-800' :
                          'bg-teal-100 text-teal-800'
                        }`}>
                          {cmd.typeCommande}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getActiviteBgColor(cmd.service)} ${getActiviteColor(cmd.service)}`}>
                          {cmd.service}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{cmd.datePrevue || '—'}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cmd.livraison === 'Effectuée' ? 'bg-emerald-100 text-emerald-800' : 'bg-orange-100 text-orange-800'}`}>
                          {cmd.livraison}
                        </span>
                      </td>
                      <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                        <div className="flex gap-1">
                          <button onClick={() => openEditCommande(cmd)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg" title="Modifier">
                            <Icon name="edit" size={18}/>
                          </button>
                          {cmd.statut === 'Active' && (
                            <button onClick={() => completeCommande(cmd.id)} className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg" title="Compléter">
                              <Icon name="check" size={18}/>
                            </button>
                          )}
                          <button onClick={() => deleteCommande(cmd.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg" title="Supprimer">
                            <Icon name="x" size={18}/>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Légende */}
        <div className="bg-slate-50 rounded-xl p-4 flex flex-wrap items-center gap-4 text-sm">
          <span className="text-slate-600 font-medium">Légende services:</span>
          <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500"></div><span>Livraison</span></div>
          <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-yellow-400"></div><span>Cueillette</span></div>
          <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-red-600"></div><span>Installation</span></div>
          <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-green-500"></div><span>Transport</span></div>
        </div>
      </div>
    );
  };

  // === PRODUCTION (COMPLET AVEC 3 ONGLETS) ===
// === PRODUCTION ===
  const Production = () => {
    // ===== CONSTANTES =====
    const monthNames = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    const dayNamesShort = ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'];

    // Générer les jours du mois
    const getDaysInMonth = (date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const daysInMonth = lastDay.getDate();
      const startingDay = firstDay.getDay();
      
      const daysArray = [];
      const prevMonthLastDay = new Date(year, month, 0).getDate();
      for (let i = startingDay - 1; i >= 0; i--) {
        daysArray.push({ day: prevMonthLastDay - i, currentMonth: false, date: new Date(year, month - 1, prevMonthLastDay - i) });
      }
      for (let i = 1; i <= daysInMonth; i++) {
        daysArray.push({ day: i, currentMonth: true, date: new Date(year, month, i) });
      }
      const remainingDays = 42 - daysArray.length;
      for (let i = 1; i <= remainingDays; i++) {
        daysArray.push({ day: i, currentMonth: false, date: new Date(year, month + 1, i) });
      }
      return daysArray;
    };

    const days = getDaysInMonth(currentMonth);

    // Formater une date en YYYY-MM-DD
    const formatDateKey = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    // ===== COMMANDES EN PRODUCTION =====
    // Une commande est en production si envoyeProduction = '√' et productionTerminee != '√'
    const commandesEnProduction = commandesList.filter(cmd => 
      cmd.envoyeProduction === '√' && cmd.productionTerminee !== '√'
    );
    
    // Toutes les commandes actives (pour le modal "Mettre en production")
    const commandesPretesProduction = commandesList.filter(cmd => 
      cmd.statut === 'Active'
    );

    // ===== FONCTIONS POUR LE CALENDRIER =====
    
    // Obtenir les commandes en production pour une date donnée
    const getCommandesForDate = (date) => {
      const dateKey = formatDateKey(date);
      return commandesEnProduction.filter(cmd => {
        // Vérifier si la commande a une dateProduction qui correspond
        if (!cmd.dateProduction) return false;
        return cmd.dateProduction === dateKey;
      });
    };

    // Calculer les totaux pour une date
    const getTotalsForDate = (date) => {
      const cmds = getCommandesForDate(date);
      return {
        count: cmds.length,
        piedsLineaires: cmds.reduce((acc, cmd) => acc + (parseInt(cmd.piedsLineaires) || 0), 0),
        poteaux: cmds.reduce((acc, cmd) => acc + (parseInt(cmd.nombrePoteaux) || 0), 0)
      };
    };

    // ===== ACTIONS =====
    const mettreEnProductionFn = (cmdId) => {
      setCommandesList(prev => prev.map(cmd => 
        cmd.id === cmdId ? { ...cmd, envoyeProduction: '√' } : cmd
      ));
    };

    const retirerDeProduction = (cmdId) => {
      setCommandesList(prev => prev.map(cmd => 
        cmd.id === cmdId ? { ...cmd, envoyeProduction: '' } : cmd
      ));
    };

    const terminerProduction = (cmdId) => {
      setCommandesList(prev => prev.map(cmd => 
        cmd.id === cmdId ? { ...cmd, productionTerminee: '√' } : cmd
      ));
    };

    // Semaines du mois pour le filtre
    const getSemainesDuMois = () => {
      const semaines = [];
      const year = currentMonth.getFullYear();
      const month = currentMonth.getMonth();
      let weekStart = new Date(year, month, 1);
      while (weekStart.getMonth() === month) {
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        semaines.push({
          label: `${weekStart.getDate()} - ${weekEnd.getDate() > weekStart.getDate() ? weekEnd.getDate() : new Date(year, month + 1, 0).getDate()} ${monthNames[month]}`,
          start: new Date(weekStart),
          end: weekEnd
        });
        weekStart = new Date(weekStart);
        weekStart.setDate(weekStart.getDate() + 7);
      }
      return semaines;
    };

    const semaines = getSemainesDuMois();

    // ===== STATISTIQUES =====
    const getStatistiques = () => {
      const now = new Date();
      let filteredCmds = commandesEnProduction;
      
      if (statsPeriode === 'journalier') {
        const todayKey = formatDateKey(now);
        filteredCmds = filteredCmds.filter(cmd => cmd.dateProduction === todayKey);
      } else if (statsPeriode === 'hebdomadaire') {
        const weekStart = new Date(now);
        weekStart.setDate(now.getDate() - now.getDay());
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        filteredCmds = filteredCmds.filter(cmd => {
          if (!cmd.dateProduction) return false;
          const cmdDate = new Date(cmd.dateProduction);
          return cmdDate >= weekStart && cmdDate <= weekEnd;
        });
      } else if (statsPeriode === 'mensuel') {
        filteredCmds = filteredCmds.filter(cmd => {
          if (!cmd.dateProduction) return false;
          const cmdDate = new Date(cmd.dateProduction);
          return cmdDate.getMonth() === now.getMonth() && cmdDate.getFullYear() === now.getFullYear();
        });
      } else if (statsPeriode === 'annuel') {
        filteredCmds = filteredCmds.filter(cmd => {
          if (!cmd.dateProduction) return false;
          const cmdDate = new Date(cmd.dateProduction);
          return cmdDate.getFullYear() === now.getFullYear();
        });
      }

      return {
        totalCommandes: filteredCmds.length,
        piedsLineaires: filteredCmds.reduce((acc, cmd) => acc + (parseInt(cmd.piedsLineaires) || 0), 0),
        poteaux: filteredCmds.reduce((acc, cmd) => acc + (parseInt(cmd.nombrePoteaux) || 0), 0),
        enProduction: commandesEnProduction.length,
        terminees: commandesList.filter(cmd => cmd.productionTerminee === '√').length,
        enAttente: commandesList.filter(cmd => cmd.statut === 'Active' && cmd.envoyeProduction !== '√').length
      };
    };

    const stats = getStatistiques();

    // Calculer le total global des commandes en production
    const totalPiedsLineairesEnProduction = commandesEnProduction.reduce((acc, cmd) => acc + (parseInt(cmd.piedsLineaires) || 0), 0);
    const totalPoteauxEnProduction = commandesEnProduction.reduce((acc, cmd) => acc + (parseInt(cmd.nombrePoteaux) || 0), 0);

    // ===== MODAL DÉTAILS D'UNE DATE =====
    const DateDetailModal = () => {
      if (!selectedProductionDate) return null;
      const cmds = getCommandesForDate(selectedProductionDate);
      const totals = getTotalsForDate(selectedProductionDate);

      return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-800 text-white">
              <h2 className="text-xl font-bold">
                Projet du : {selectedProductionDate.getDate()} {monthNames[selectedProductionDate.getMonth()]} {selectedProductionDate.getFullYear()}
              </h2>
              <button onClick={() => setSelectedProductionDate(null)} className="p-2 hover:bg-slate-700 rounded-lg">
                <Icon name="x" size={24}/>
              </button>
            </div>
            
            <div className="overflow-y-auto max-h-[calc(90vh-200px)] p-4 space-y-4">
              {cmds.length === 0 ? (
                <div className="text-center py-12 text-slate-500">Aucune commande en production pour cette date</div>
              ) : (
                cmds.map(cmd => (
                  <div key={cmd.id} className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono font-bold text-lg">{cmd.num}</span>
                          <span className="text-slate-600">{cmd.client}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getActiviteBgColor(cmd.service)} ${getActiviteColor(cmd.service)}`}>{cmd.service}</span>
                        </div>
                        <p className="text-sm text-slate-500 mb-3">{cmd.adresse}</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-slate-500">Date prévue</p>
                            <p className="font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded inline-block">{cmd.datePrevue || '—'}</p>
                          </div>
                          <div>
                            <p className="text-slate-500">Date production</p>
                            <p className="font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded inline-block">{cmd.dateProduction || '—'}</p>
                          </div>
                          <div>
                            <p className="text-slate-500">Date prise mesure</p>
                            <p className="font-semibold text-amber-600 bg-amber-100 px-2 py-0.5 rounded inline-block">{cmd.datePriseMesure || '—'}</p>
                          </div>
                          <div>
                            <p className="text-slate-500">Couleur</p>
                            <p className="font-semibold">{cmd.couleur || '—'}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="text-slate-500">Mesure:</span>
                            <span className={`px-2 py-0.5 rounded font-semibold ${getStatusColor(cmd.mesure, 'production')}`}>{cmd.mesure || '—'}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-slate-500">Plan:</span>
                            <span className={`px-2 py-0.5 rounded font-semibold ${getStatusColor(cmd.plan, 'production')}`}>{cmd.plan || '—'}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-slate-500">Envoyé prod:</span>
                            <span className={`px-2 py-0.5 rounded font-semibold ${getStatusColor(cmd.envoyeProduction, 'production')}`}>{cmd.envoyeProduction || '—'}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-6 mt-4 pt-4 border-t border-slate-100">
                          <div className="bg-emerald-50 px-4 py-2 rounded-lg">
                            <span className="text-slate-500 text-sm">Pieds linéaires:</span>
                            <span className="font-bold text-2xl text-emerald-600 ml-2">{cmd.piedsLineaires || 0}</span>
                          </div>
                          <div className="bg-blue-50 px-4 py-2 rounded-lg">
                            <span className="text-slate-500 text-sm">Poteaux:</span>
                            <span className="font-bold text-2xl text-blue-600 ml-2">{cmd.nombrePoteaux || 0}</span>
                          </div>
                        </div>
                      </div>
                      <button className="p-2 text-slate-400 hover:text-slate-600"><Icon name="right" size={24}/></button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-slate-200 p-4 bg-slate-50">
              <div className="flex items-center gap-4">
                <button onClick={() => setSelectedProductionDate(null)} className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl">Sortir</button>
                <div className="flex-1 flex items-center gap-6">
                  <div className="bg-white px-4 py-2 rounded-lg border">
                    <span className="text-slate-500 text-sm">Commandes:</span>
                    <span className="font-bold text-xl ml-2">{cmds.length}</span>
                  </div>
                  <div className="bg-emerald-100 px-4 py-2 rounded-lg">
                    <span className="text-emerald-700 text-sm">Total pieds linéaires:</span>
                    <span className="font-bold text-xl text-emerald-700 ml-2">{totals.piedsLineaires}</span>
                  </div>
                  <div className="bg-blue-100 px-4 py-2 rounded-lg">
                    <span className="text-blue-700 text-sm">Total poteaux:</span>
                    <span className="font-bold text-xl text-blue-700 ml-2">{totals.poteaux}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    // ===== MODAL METTRE EN PRODUCTION =====
    const MettreEnProductionModal = () => {
      if (!showMettreEnProduction) return null;

      const filteredCmds = commandesPretesProduction.filter(cmd => {
        if (productionSearchTerm) {
          const search = productionSearchTerm.toLowerCase();
          if (!cmd.num.toLowerCase().includes(search) && !cmd.client.toLowerCase().includes(search)) return false;
        }
        if (productionFilterSemaine !== 'toutes') {
          const semaine = semaines[parseInt(productionFilterSemaine)];
          if (semaine && cmd.datePrevue) {
            const cmdDate = new Date(cmd.datePrevue);
            if (cmdDate < semaine.start || cmdDate > semaine.end) return false;
          }
        }
        return true;
      });

      return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-800 text-white">
              <div className="flex items-center gap-4">
                <button onClick={() => setShowMettreEnProduction(false)} className="p-2 hover:bg-slate-700 rounded-lg"><Icon name="left" size={24}/></button>
                <h2 className="text-xl font-bold">Envoyer des commandes en production</h2>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-sm text-slate-300">En production</p>
                  <p className="text-2xl font-bold">{commandesEnProduction.length}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-slate-300">Pieds lin. total</p>
                  <p className="text-2xl font-bold text-emerald-400">{totalPiedsLineairesEnProduction}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 p-4 bg-slate-100 border-b border-slate-200">
              <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))} className="p-2 hover:bg-slate-200 rounded-full"><Icon name="left" size={28}/></button>
              <h3 className="text-2xl font-bold text-slate-800 min-w-[200px] text-center">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h3>
              <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))} className="p-2 hover:bg-slate-200 rounded-full"><Icon name="right" size={28}/></button>
            </div>

            <div className="p-4 border-b border-slate-200 flex gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600">Recherche</span>
                <input type="text" value={productionSearchTerm} onChange={(e) => setProductionSearchTerm(e.target.value)} placeholder="# Projet ou client" className="px-3 py-2 border border-slate-200 rounded-lg w-48"/>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600">Semaine</span>
                <select value={productionFilterSemaine} onChange={(e) => setProductionFilterSemaine(e.target.value)} className="px-3 py-2 border border-slate-200 rounded-lg">
                  <option value="toutes">Toutes les semaines</option>
                  {semaines.map((s, idx) => <option key={idx} value={idx}>{s.label}</option>)}
                </select>
              </div>
              <div className="flex-1 text-right text-sm text-slate-600">
                {filteredCmds.length} commandes affichées
              </div>
            </div>

            <div className="flex-1 overflow-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100 sticky top-0">
                  <tr>
                    <th className="px-3 py-3 text-left font-semibold"># Projet</th>
                    <th className="px-3 py-3 text-left font-semibold">Client</th>
                    <th className="px-3 py-3 text-center font-semibold">Service</th>
                    <th className="px-3 py-3 text-center font-semibold">Date Prévue</th>
                    <th className="px-3 py-3 text-center font-semibold">Date Production</th>
                    <th className="px-3 py-3 text-center font-semibold">Pi. Lin.</th>
                    <th className="px-3 py-3 text-center font-semibold">Mesure</th>
                    <th className="px-3 py-3 text-center font-semibold">Plan</th>
                    <th className="px-3 py-3 text-center font-semibold">Envoyé Prod.</th>
                    <th className="px-3 py-3 text-center font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredCmds.map(cmd => (
                    <tr key={cmd.id} className={`hover:bg-slate-50 ${cmd.envoyeProduction === '√' ? 'bg-emerald-50' : ''}`}>
                      <td className="px-3 py-3 font-mono font-bold">{cmd.num}</td>
                      <td className="px-3 py-3">{cmd.client}</td>
                      <td className="px-3 py-3 text-center">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getActiviteBgColor(cmd.service)} ${getActiviteColor(cmd.service)}`}>{cmd.service}</span>
                      </td>
                      <td className="px-3 py-3 text-center">{cmd.datePrevue || '—'}</td>
                      <td className="px-3 py-3 text-center">
                        <input 
                          type="date" 
                          value={cmd.dateProduction || ''} 
                          onChange={(e) => setCommandesList(prev => prev.map(c => c.id === cmd.id ? { ...c, dateProduction: e.target.value } : c))} 
                          className="px-2 py-1 border border-slate-200 rounded text-sm w-36"
                        />
                      </td>
                      <td className="px-3 py-3 text-center font-bold text-emerald-600">{cmd.piedsLineaires || 0}</td>
                      <td className="px-3 py-3 text-center">
                        <select value={cmd.mesure || ''} onChange={(e) => setCommandesList(prev => prev.map(c => c.id === cmd.id ? { ...c, mesure: e.target.value } : c))} className={`px-2 py-1 rounded text-xs font-bold w-16 ${getStatusColor(cmd.mesure, 'production')}`}>
                          {optionsProduction.map(o => <option key={o.code} value={o.code}>{o.code || '—'}</option>)}
                        </select>
                      </td>
                      <td className="px-3 py-3 text-center">
                        <select value={cmd.plan || ''} onChange={(e) => setCommandesList(prev => prev.map(c => c.id === cmd.id ? { ...c, plan: e.target.value } : c))} className={`px-2 py-1 rounded text-xs font-bold w-16 ${getStatusColor(cmd.plan, 'production')}`}>
                          {optionsProduction.map(o => <option key={o.code} value={o.code}>{o.code || '—'}</option>)}
                        </select>
                      </td>
                      <td className="px-3 py-3 text-center">
                        <select value={cmd.envoyeProduction || ''} onChange={(e) => setCommandesList(prev => prev.map(c => c.id === cmd.id ? { ...c, envoyeProduction: e.target.value } : c))} className={`px-2 py-1 rounded text-xs font-bold w-16 ${getStatusColor(cmd.envoyeProduction, 'production')}`}>
                          {optionsProduction.map(o => <option key={o.code} value={o.code}>{o.code || '—'}</option>)}
                        </select>
                      </td>
                      <td className="px-3 py-3 text-center">
                        {cmd.envoyeProduction === '√' ? (
                          <button onClick={() => retirerDeProduction(cmd.id)} className="px-3 py-1.5 bg-red-100 text-red-600 hover:bg-red-200 rounded font-medium text-xs">Retirer</button>
                        ) : (
                          <button onClick={() => mettreEnProductionFn(cmd.id)} className="px-3 py-1.5 bg-emerald-100 text-emerald-600 hover:bg-emerald-200 rounded font-medium text-xs">Ajouter</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t border-slate-200 bg-slate-50">
              <button onClick={() => setShowMettreEnProduction(false)} className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl">Sortir</button>
            </div>
          </div>
        </div>
      );
    };

    // ===== RENDU PRINCIPAL =====
    return (
      <div className="space-y-6">
        <DateDetailModal />
        <MettreEnProductionModal />

        {/* HEADER */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Production</h1>
            <p className="text-slate-500 mt-1">Gérez la production de vos commandes</p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            {/* Légende couleurs */}
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-1 bg-blue-500 text-white rounded">Livraison</span>
              <span className="px-2 py-1 bg-yellow-400 text-yellow-900 rounded">Cueillette</span>
              <span className="px-2 py-1 bg-red-600 text-white rounded">Installation</span>
              <span className="px-2 py-1 bg-green-500 text-white rounded">Transport</span>
            </div>
            {/* Stats rapides */}
            <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-xl border border-slate-200">
              <div className="text-center">
                <p className="text-xs text-slate-500">Commandes</p>
                <p className="text-xl font-bold text-slate-800">{commandesEnProduction.length}</p>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div className="text-center">
                <p className="text-xs text-slate-500">Pi. Lin.</p>
                <p className="text-xl font-bold text-emerald-600">{totalPiedsLineairesEnProduction}</p>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div className="text-center">
                <p className="text-xs text-slate-500">Poteaux</p>
                <p className="text-xl font-bold text-blue-600">{totalPoteauxEnProduction}</p>
              </div>
            </div>
            {/* Bouton Mettre en production */}
            <button onClick={() => setShowMettreEnProduction(true)} className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
              <Icon name="plus" size={20}/>
              <span>Mettre en production</span>
            </button>
          </div>
        </div>

        {/* ONGLETS */}
        <div className="flex gap-2 bg-slate-100 p-1 rounded-xl w-fit">
          <button onClick={() => setProductionTab('calendrier')} className={`px-5 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2 ${productionTab === 'calendrier' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}><Icon name="calendar" size={18}/>Calendrier</button>
          <button onClick={() => setProductionTab('finaliser')} className={`px-5 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2 ${productionTab === 'finaliser' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}><Icon name="check" size={18}/>Finaliser</button>
          <button onClick={() => setProductionTab('statistiques')} className={`px-5 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2 ${productionTab === 'statistiques' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}><Icon name="chart" size={18}/>Statistiques</button>
        </div>

        {/* ===== CALENDRIER ===== */}
        {productionTab === 'calendrier' && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            {/* Navigation mois */}
            <div className="flex items-center justify-between p-4 bg-slate-800 text-white">
              <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))} className="p-2 hover:bg-slate-700 rounded-full"><Icon name="left" size={28}/></button>
              <h2 className="text-2xl font-bold">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h2>
              <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))} className="p-2 hover:bg-slate-700 rounded-full"><Icon name="right" size={28}/></button>
            </div>

            {/* En-têtes des jours */}
            <div className="grid grid-cols-7 bg-slate-700 text-white">
              {dayNamesShort.map((day, idx) => (
                <div key={day} className="p-3 text-center border-r border-slate-600 last:border-r-0">
                  <p className="font-semibold uppercase text-sm">{day}</p>
                </div>
              ))}
            </div>

            {/* Grille des jours */}
            <div className="grid grid-cols-7">
              {days.map((dayInfo, idx) => {
                const totals = getTotalsForDate(dayInfo.date);
                const cmds = getCommandesForDate(dayInfo.date);
                const isWeekend = dayInfo.date.getDay() === 0 || dayInfo.date.getDay() === 6;
                const isToday = formatDateKey(dayInfo.date) === formatDateKey(new Date());
                
                return (
                  <div 
                    key={idx} 
                    onClick={() => totals.count > 0 && setSelectedProductionDate(dayInfo.date)} 
                    className={`min-h-[130px] border-r border-b border-slate-200 p-2 transition-colors
                      ${!dayInfo.currentMonth ? 'bg-slate-100 text-slate-400' : isWeekend ? 'bg-slate-50' : 'bg-white'} 
                      ${totals.count > 0 ? 'cursor-pointer hover:bg-blue-50' : ''}
                      ${isToday && dayInfo.currentMonth ? 'ring-2 ring-inset ring-amber-400' : ''}
                    `}
                  >
                    {/* Numéro du jour */}
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-lg font-bold ${!dayInfo.currentMonth ? 'text-slate-300' : isToday ? 'text-amber-600' : ''}`}>
                        {dayInfo.day}
                      </span>
                      {totals.count > 0 && dayInfo.currentMonth && (
                        <div className="flex items-center gap-1">
                          {/* Badge nombre de commandes */}
                          <span className="bg-blue-500 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                            {totals.count}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Totaux du jour */}
                    {totals.count > 0 && dayInfo.currentMonth && (
                      <div className="space-y-1">
                        {/* Total pieds linéaires */}
                        <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded text-center">
                          {totals.piedsLineaires} pi.lin.
                        </div>
                        
                        {/* Aperçu des commandes (max 2) */}
                        {cmds.slice(0, 2).map(cmd => (
                          <div key={cmd.id} className={`text-xs p-1.5 rounded truncate ${getActiviteBgColor(cmd.service)} ${getActiviteColor(cmd.service)}`}>
                            <p className="font-bold truncate">{cmd.num}</p>
                            <p className="truncate opacity-90 text-[10px]">{cmd.client}</p>
                          </div>
                        ))}
                        
                        {cmds.length > 2 && (
                          <p className="text-xs text-blue-600 font-medium text-center">+{cmds.length - 2} autres</p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ===== FINALISER ===== */}
        {productionTab === 'finaliser' && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <input type="text" placeholder="Rechercher une commande..." className="flex-1 max-w-md px-4 py-2.5 border border-slate-200 rounded-xl"/>
              <div className="flex items-center gap-4">
                <div className="text-sm text-slate-600">
                  <span className="font-bold text-lg text-slate-800">{commandesEnProduction.length}</span> commandes en production
                </div>
                <div className="text-sm">
                  Total: <span className="font-bold text-emerald-600">{totalPiedsLineairesEnProduction}</span> pi.lin.
                </div>
              </div>
            </div>

            {commandesEnProduction.length === 0 ? (
              <div className="p-12 text-center text-slate-500">
                <Icon name="check" size={48} className="mx-auto mb-4 opacity-30"/>
                <p>Aucune commande en production</p>
                <button onClick={() => setShowMettreEnProduction(true)} className="mt-4 px-4 py-2 bg-amber-100 text-amber-800 rounded-lg font-medium">
                  Mettre des commandes en production
                </button>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase"># Projet</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Client</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">Service</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">Date Prod.</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">Nb Poteaux</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">Pieds Lin.</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {commandesEnProduction.map(cmd => (
                    <tr key={cmd.id} className={`${getActiviteRowBg(cmd.service)} hover:bg-opacity-75`}>
                      <td className="px-4 py-4">
                        <div className={`inline-block px-3 py-2 rounded-lg border-2 ${getActiviteCardBg(cmd.service)}`}>
                          <p className="font-mono font-bold">{cmd.num}</p>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <p className="font-medium">{cmd.client}</p>
                        <p className="text-sm text-slate-500">{cmd.adresse?.split(',')[0]}</p>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getActiviteBgColor(cmd.service)} ${getActiviteColor(cmd.service)}`}>{cmd.service}</span>
                      </td>
                      <td className="px-4 py-4 text-center font-medium">{cmd.dateProduction || '—'}</td>
                      <td className="px-4 py-4 text-center"><span className="text-xl font-bold text-blue-600">{cmd.nombrePoteaux || 0}</span></td>
                      <td className="px-4 py-4 text-center"><span className="text-xl font-bold text-emerald-600">{cmd.piedsLineaires || 0}</span></td>
                      <td className="px-4 py-4 text-center">
                        <button onClick={() => terminerProduction(cmd.id)} className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg">
                          Terminer production
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-slate-200">
                  <tr>
                    <td colSpan={4} className="px-4 py-3 text-right font-bold text-slate-700">TOTAUX:</td>
                    <td className="px-4 py-3 text-center"><span className="text-2xl font-bold text-blue-600">{totalPoteauxEnProduction}</span></td>
                    <td className="px-4 py-3 text-center"><span className="text-2xl font-bold text-emerald-600">{totalPiedsLineairesEnProduction}</span></td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            )}
          </div>
        )}

        {/* ===== STATISTIQUES ===== */}
        {productionTab === 'statistiques' && (
          <div className="space-y-6">
            {/* Sélecteur de période */}
            <div className="flex gap-2 bg-white p-1 rounded-xl w-fit border border-slate-200">
              {['journalier', 'hebdomadaire', 'mensuel', 'annuel'].map(p => (
                <button key={p} onClick={() => setStatsPeriode(p)} className={`px-4 py-2 rounded-lg font-medium capitalize ${statsPeriode === p ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>{p}</button>
              ))}
            </div>

            {/* Cartes statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-slate-500 text-sm font-medium">Total Commandes</p>
                <p className="text-4xl font-bold text-slate-800 mt-2">{stats.totalCommandes}</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-2xl shadow-sm border border-emerald-100">
                <p className="text-emerald-600 text-sm font-medium">Pieds Linéaires</p>
                <p className="text-4xl font-bold text-emerald-700 mt-2">{stats.piedsLineaires}</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl shadow-sm border border-blue-100">
                <p className="text-blue-600 text-sm font-medium">Nb Poteaux</p>
                <p className="text-4xl font-bold text-blue-700 mt-2">{stats.poteaux}</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl shadow-sm border border-purple-100">
                <p className="text-purple-600 text-sm font-medium">En Production</p>
                <p className="text-4xl font-bold text-purple-700 mt-2">{stats.enProduction}</p>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl shadow-sm border border-green-100">
                <p className="text-green-600 text-sm font-medium">Terminées</p>
                <p className="text-4xl font-bold text-green-700 mt-2">{stats.terminees}</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-2xl shadow-sm border border-amber-100">
                <p className="text-amber-600 text-sm font-medium">En Attente</p>
                <p className="text-4xl font-bold text-amber-700 mt-2">{stats.enAttente}</p>
              </div>
            </div>

            {/* Calendrier et graphique */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Mini calendrier */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-800">Calendrier</h3>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))} className="p-1 hover:bg-slate-100 rounded"><Icon name="left" size={20}/></button>
                    <span className="font-medium text-sm">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</span>
                    <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))} className="p-1 hover:bg-slate-100 rounded"><Icon name="right" size={20}/></button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  {dayNamesShort.map(d => <div key={d} className="p-2 font-semibold text-slate-500 text-xs">{d}</div>)}
                  {days.map((dayInfo, idx) => {
                    const totals = getTotalsForDate(dayInfo.date);
                    return (
                      <div 
                        key={idx} 
                        onClick={() => totals.count > 0 && setSelectedProductionDate(dayInfo.date)} 
                        className={`p-1 rounded-lg text-sm ${
                          !dayInfo.currentMonth ? 'text-slate-300' : 
                          totals.count > 0 ? 'bg-emerald-100 text-emerald-800 cursor-pointer hover:bg-emerald-200 font-bold' : ''
                        }`}
                      >
                        {dayInfo.day}
                        {totals.count > 0 && dayInfo.currentMonth && (
                          <p className="text-[9px] text-emerald-600">{totals.count} | {totals.piedsLineaires}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Graphique */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-6">Volume ({statsPeriode})</h3>
                <div className="h-48 flex items-end justify-around gap-4">
                  {(statsPeriode === 'hebdomadaire' ? ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'] : 
                    statsPeriode === 'journalier' ? ['8h', '10h', '12h', '14h', '16h'] :
                    ['Sem1', 'Sem2', 'Sem3', 'Sem4']).map((label, i) => (
                    <div key={label} className="flex flex-col items-center gap-2 flex-1">
                      <div className="w-full flex gap-1 items-end justify-center h-32">
                        <div className="w-6 bg-gradient-to-t from-amber-500 to-amber-300 rounded-t" style={{ height: `${[60, 80, 45, 90, 70][i] || 50}%` }}/>
                        <div className="w-6 bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t" style={{ height: `${[40, 60, 75, 50, 85][i] || 50}%` }}/>
                      </div>
                      <span className="text-sm font-medium text-slate-600">{label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2"><div className="w-4 h-4 bg-amber-400 rounded"/><span className="text-sm text-slate-600">Commandes</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 bg-emerald-400 rounded"/><span className="text-sm text-slate-600">Pieds lin.</span></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

 // === PLANIFICATION ===
 // === PLANIFICATION ===
  const Planification = () => {
    // Constantes
    const monthNames = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    const dayNamesShort = ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'];
    const HEURES_PAR_JOUR = 8;
    const couleursEquipes = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-pink-500', 'bg-teal-500', 'bg-red-500', 'bg-cyan-500'];

    // Générer les jours du mois
    const getDaysInMonth = (date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const daysInMonth = lastDay.getDate();
      const startingDay = firstDay.getDay();
      
      const daysArray = [];
      const prevMonthLastDay = new Date(year, month, 0).getDate();
      for (let i = startingDay - 1; i >= 0; i--) {
        daysArray.push({ day: prevMonthLastDay - i, currentMonth: false, date: new Date(year, month - 1, prevMonthLastDay - i) });
      }
      for (let i = 1; i <= daysInMonth; i++) {
        daysArray.push({ day: i, currentMonth: true, date: new Date(year, month, i) });
      }
      const remainingDays = 42 - daysArray.length;
      for (let i = 1; i <= remainingDays; i++) {
        daysArray.push({ day: i, currentMonth: false, date: new Date(year, month + 1, i) });
      }
      return daysArray;
    };

    const days = getDaysInMonth(planificationMonth);

    const formatDateKey = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    // Obtenir les semaines du mois
    const getSemainesDuMois = () => {
      const semaines = [];
      const year = planificationMonth.getFullYear();
      const month = planificationMonth.getMonth();
      let currentDate = new Date(year, month, 1);
      let weekNum = 1;
      
      while (currentDate.getMonth() === month) {
        const weekStart = new Date(currentDate);
        const weekEnd = new Date(currentDate);
        weekEnd.setDate(weekEnd.getDate() + (6 - weekEnd.getDay()));
        if (weekEnd.getMonth() !== month) {
          weekEnd.setDate(new Date(year, month + 1, 0).getDate());
        }
        
        semaines.push({
          num: weekNum,
          label: `Semaine ${weekNum} (${weekStart.getDate()}-${weekEnd.getDate()} ${monthNames[month]})`,
          start: formatDateKey(weekStart),
          end: formatDateKey(weekEnd)
        });
        
        currentDate.setDate(weekEnd.getDate() + 1);
        weekNum++;
      }
      return semaines;
    };

    const semaines = getSemainesDuMois();

    // Filtrer les installations/mesures
    const getInstallationsEtMesures = () => {
      return commandesList.filter(cmd => {
        // Filtre par type (installation ou mesure)
        if (planificationFilterType === 'installation' && cmd.service !== 'Installation') return false;
        if (planificationFilterType === 'mesure' && cmd.service !== 'Mesure') return false;
        if (planificationFilterType === 'tous' && cmd.service !== 'Installation' && cmd.service !== 'Mesure') return false;
        
        // Filtre par type de commande
        if (planificationFilterCommande !== 'tous' && cmd.typeCommande?.toLowerCase() !== planificationFilterCommande) return false;
        
        // Filtre par équipe
        if (planificationFilterEquipe !== 'toutes' && cmd.equipe !== planificationFilterEquipe) return false;
        
        return cmd.statut === 'Active';
      });
    };

    // Installations planifiées (ont une date et une équipe)
    const installationsPlanifiees = commandesList.filter(cmd => 
      cmd.datePrevue && 
      cmd.equipe && 
      (cmd.service === 'Installation' || cmd.service === 'Mesure') &&
      cmd.statut === 'Active'
    );

    // Installations non planifiées (production terminée mais pas de date ou pas d'équipe)
    const installationsNonPlanifiees = commandesList.filter(cmd => 
      (cmd.service === 'Installation' || cmd.service === 'Mesure') &&
      cmd.statut === 'Active' &&
      cmd.productionTerminee === '√' &&
      (!cmd.equipe || !cmd.datePrevue)
    );

    // Calculer le nombre de jours nécessaires pour une installation
    const calculerJoursNecessaires = (tempsHeures) => {
      if (!tempsHeures || tempsHeures <= 0) return 1;
      if (tempsHeures <= 12) return 1; // Jusqu'à 12h = 1 jour (avec notification si > 8h)
      return Math.ceil(tempsHeures / HEURES_PAR_JOUR);
    };

    // Vérifier si une installation dépasse la journée normale (8h)
    const depasseJournee = (tempsHeures) => {
      return tempsHeures > HEURES_PAR_JOUR && tempsHeures <= 12;
    };

    // Obtenir les installations pour une date donnée
    const getInstallationsForDate = (date) => {
      const dateKey = formatDateKey(date);
      
      return installationsPlanifiees.filter(cmd => {
        if (!cmd.datePrevue) return false;
        
        const tempsHeures = parseInt(cmd.tempsEstimeInstallation) || 0;
        const joursNecessaires = calculerJoursNecessaires(tempsHeures);
        
        // Si l'installation dure plusieurs jours
        if (joursNecessaires > 1) {
          const dateDebut = new Date(cmd.datePrevue);
          let joursTravailles = 0;
          let currentDate = new Date(dateDebut);
          
          while (joursTravailles < joursNecessaires) {
            // Sauter les weekends
            if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
              if (formatDateKey(currentDate) === dateKey) {
                return true;
              }
              joursTravailles++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
          }
          return false;
        }
        
        return cmd.datePrevue === dateKey;
      }).filter(cmd => {
        // Appliquer les filtres
        if (planificationFilterType === 'installation' && cmd.service !== 'Installation') return false;
        if (planificationFilterType === 'mesure' && cmd.service !== 'Mesure') return false;
        if (planificationFilterCommande !== 'tous' && cmd.typeCommande?.toLowerCase() !== planificationFilterCommande) return false;
        if (planificationFilterEquipe !== 'toutes' && cmd.equipe !== planificationFilterEquipe) return false;
        return true;
      });
    };

    // Calculer les totaux pour une date
    const getTotalsForDate = (date) => {
      const installations = getInstallationsForDate(date);
      const byEquipe = {};
      
      installations.forEach(cmd => {
        if (!byEquipe[cmd.equipe]) {
          byEquipe[cmd.equipe] = { count: 0, heures: 0, piedsLin: 0 };
        }
        byEquipe[cmd.equipe].count++;
        byEquipe[cmd.equipe].heures += parseInt(cmd.tempsEstimeInstallation) || 0;
        byEquipe[cmd.equipe].piedsLin += parseInt(cmd.piedsLineaires) || 0;
      });
      
      return {
        count: installations.length,
        tempsTotal: installations.reduce((acc, cmd) => acc + (parseInt(cmd.tempsEstimeInstallation) || 0), 0),
        piedsLineaires: installations.reduce((acc, cmd) => acc + (parseInt(cmd.piedsLineaires) || 0), 0),
        byEquipe
      };
    };

    // Stats de la semaine courante
    const getStatsHebdo = () => {
      const now = new Date();
      const weekStart = new Date(now);
      weekStart.setDate(now.getDate() - now.getDay());
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      
      const installationsSemaine = installationsPlanifiees.filter(cmd => {
        if (!cmd.datePrevue) return false;
        const cmdDate = new Date(cmd.datePrevue);
        return cmdDate >= weekStart && cmdDate <= weekEnd;
      });
      
      return {
        nbInstallations: installationsSemaine.length,
        heuresTotal: installationsSemaine.reduce((acc, cmd) => acc + (parseInt(cmd.tempsEstimeInstallation) || 0), 0),
        piedsTotal: installationsSemaine.reduce((acc, cmd) => acc + (parseInt(cmd.piedsLineaires) || 0), 0),
        nbDeplacements: installationsSemaine.length // 1 déplacement par installation
      };
    };

    const statsHebdo = getStatsHebdo();

    // Obtenir la couleur d'une équipe
    const getEquipeCouleur = (equipeNom) => {
      const equipe = equipesList.find(e => e.nom === equipeNom);
      return equipe ? equipe.couleur : 'bg-slate-500';
    };

    // Actions
    const assignerEquipe = (cmdId, equipeNom) => {
      setCommandesList(prev => prev.map(cmd => 
        cmd.id === cmdId ? { ...cmd, equipe: equipeNom } : cmd
      ));
    };

    const planifierInstallation = (cmdId, date, equipe, options = {}) => {
      setCommandesList(prev => prev.map(cmd => 
        cmd.id === cmdId ? { 
          ...cmd, 
          datePrevue: date, 
          equipe: equipe,
          clientPresent: options.clientPresent || false,
          representantPresent: options.representantPresent || false,
          avisEnvoye: options.avisEnvoye || false
        } : cmd
      ));
      setShowPlanifierInstallationModal(false);
      setInstallationAPlanifier(null);
    };

    const terminerInstallation = (cmdId) => {
      setCommandesList(prev => prev.map(cmd => 
        cmd.id === cmdId ? { ...cmd, statut: 'Complétée', installationTerminee: true } : cmd
      ));
    };

    // Gestion des équipes
    const ajouterEquipe = () => {
      if (!equipeForm.nom) return;
      const newId = Math.max(...equipesList.map(e => e.id), 0) + 1;
      setEquipesList(prev => [...prev, { id: newId, ...equipeForm }]);
      setEquipeForm({ nom: '', membres: [], couleur: 'bg-blue-500' });
      setShowAddEquipeModal(false);
    };

    const supprimerEquipe = (id) => {
      if (window.confirm('Êtes-vous sûr de vouloir supprimer cette équipe?')) {
        setEquipesList(prev => prev.filter(e => e.id !== id));
      }
    };

    // ===== MODAL DÉTAILS D'UNE DATE =====
    const DateDetailModal = () => {
      if (!selectedPlanificationDate) return null;
      const installations = getInstallationsForDate(selectedPlanificationDate);
      const totals = getTotalsForDate(selectedPlanificationDate);

      return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
              <h2 className="text-xl font-bold">
                Projet du : {selectedPlanificationDate.getDate()} {monthNames[selectedPlanificationDate.getMonth()]} {selectedPlanificationDate.getFullYear()}
              </h2>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-slate-600 rounded-lg" title="Réduire">
                  <Icon name="down" size={20}/>
                </button>
                <button onClick={() => setSelectedPlanificationDate(null)} className="p-2 hover:bg-slate-600 rounded-lg">
                  <Icon name="x" size={24}/>
                </button>
              </div>
            </div>
            
            {/* Sidebar avec numéros de semaine */}
            <div className="flex flex-1 overflow-hidden">
              <div className="w-12 bg-slate-100 border-r flex flex-col">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-24 flex items-center justify-center text-sm text-slate-500 border-b">
                    {i + 1}
                  </div>
                ))}
              </div>
              
              {/* Contenu principal */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {installations.length === 0 ? (
                  <div className="text-center py-12 text-slate-500">Aucune installation planifiée pour cette date</div>
                ) : (
                  installations.map(cmd => {
                    const tempsHeures = parseInt(cmd.tempsEstimeInstallation) || 0;
                    const depasse = depasseJournee(tempsHeures);
                    
                    return (
                      <div key={cmd.id} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                        {/* En-tête */}
                        <div className="flex items-start justify-between p-4 border-b border-slate-100">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="font-mono font-bold text-xl">{cmd.num}</span>
                              {cmd.reprise && <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded">Reprise</span>}
                              <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded">Installation</span>
                            </div>
                            <p className="font-semibold text-lg">{cmd.client}</p>
                            {cmd.reference && <p className="text-sm text-slate-500">{cmd.reference}</p>}
                            <p className="text-sm text-slate-600 mt-1">{cmd.adresse}</p>
                            
                            {cmd.commentaire && (
                              <div className="mt-3 p-3 bg-slate-50 rounded-lg border text-sm">
                                {cmd.commentaire.split('\n').map((line, i) => (
                                  <p key={i} className={line.includes('***') ? 'text-red-600 font-semibold' : ''}>{line}</p>
                                ))}
                              </div>
                            )}
                          </div>
                          
                          {/* Dates et actions */}
                          <div className="flex flex-col items-end gap-2">
                            <div className="flex items-center gap-2">
                              <span className="text-sm bg-slate-200 px-2 py-1 rounded">{cmd.dateEntree}</span>
                              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded flex items-center gap-1">
                                <Icon name="calendar" size={12}/>{cmd.datePrevue}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm bg-slate-100 px-2 py-1 rounded">{cmd.dateProduction || '—'}</span>
                              {depasse && (
                                <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded flex items-center gap-1">
                                  <Icon name="alert" size={14}/> Dépasse 8h
                                </span>
                              )}
                              <span className="text-sm bg-orange-400 text-white px-2 py-1 rounded">{cmd.datePrevue}</span>
                            </div>
                            <div className="flex gap-2 mt-2">
                              <button className="p-2 hover:bg-slate-100 rounded-lg" title="Sauvegarder">
                                <Icon name="save" size={20}/>
                              </button>
                              <button onClick={() => setSelectedInstallation(cmd)} className="p-2 hover:bg-slate-100 rounded-lg" title="Modifier">
                                <Icon name="edit" size={20}/>
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Statuts */}
                        <div className="p-4 grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-slate-500 w-32">Mesure:</span>
                              <span className={`px-2 py-0.5 rounded font-semibold ${getStatusColor(cmd.mesure, 'production')}`}>{cmd.mesure || '—'}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-slate-500 w-32">Plan:</span>
                              <span className={`px-2 py-0.5 rounded font-semibold ${getStatusColor(cmd.plan, 'production')}`}>{cmd.plan || '—'}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-slate-500 w-32">Envoyé prod:</span>
                              <span className={`px-2 py-0.5 rounded font-semibold ${getStatusColor(cmd.envoyeProduction, 'production')}`}>{cmd.envoyeProduction || '—'}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-slate-500 w-32">Prod. terminée:</span>
                              <span className={`px-2 py-0.5 rounded font-semibold ${getStatusColor(cmd.productionTerminee, 'production')}`}>{cmd.productionTerminee || '—'}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-slate-500 w-20">Verre:</span>
                              <span className={`px-2 py-0.5 rounded font-semibold ${getStatusColor(cmd.achatVerres, 'achat')}`}>{cmd.achatVerres || '—'}</span>
                              {cmd.achatVerres === 'R' && <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded">10 octobre 2025</span>}
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-slate-500 w-20">Limon:</span>
                              <span className={`px-2 py-0.5 rounded font-semibold ${getStatusColor(cmd.achatLimons, 'achat')}`}>{cmd.achatLimons || '—'}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-slate-500 w-20">Peinture:</span>
                              <span className={`px-2 py-0.5 rounded font-semibold ${getStatusColor(cmd.achatPeinture, 'achat')}`}>{cmd.achatPeinture || '—'}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-slate-500 w-20">Colonne:</span>
                              <span className={`px-2 py-0.5 rounded font-semibold ${getStatusColor(cmd.achatColonnes, 'achat')}`}>{cmd.achatColonnes || '—'}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-slate-500 w-20">Fibre:</span>
                              <span className={`px-2 py-0.5 rounded font-semibold ${getStatusColor(cmd.achatFibre, 'achat')}`}>{cmd.achatFibre || '—'}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-slate-500 w-20">Attaches:</span>
                              <span className={`px-2 py-0.5 rounded font-semibold ${getStatusColor(cmd.achatAttaches, 'achat')}`}>{cmd.achatAttaches || '—'}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-slate-500 w-20">Plancher:</span>
                              <span className={`px-2 py-0.5 rounded font-semibold bg-green-500 text-white`}>R</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Infos clés */}
                        <div className="p-4 bg-slate-50 border-t flex items-center gap-4 flex-wrap">
                          <div className={`px-3 py-2 rounded-lg text-white text-sm font-semibold ${getEquipeCouleur(cmd.equipe)}`}>
                            {cmd.equipe || 'Non assigné'}
                          </div>
                          <div className="text-sm">
                            <span className="text-slate-500">Pieds linéaires:</span>
                            <span className="font-bold ml-1">{cmd.piedsLineaires || 0}</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-slate-500">Temps d'installation:</span>
                            <span className="font-bold ml-1">{cmd.tempsEstimeInstallation || 0}h</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-slate-500">Couleur:</span>
                            <span className="font-bold ml-1">{cmd.couleur || '—'}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Footer avec résumé */}
            <div className="border-t-4 border-blue-500 p-4 bg-white">
              <div className="flex items-center justify-between">
                <button onClick={() => setSelectedPlanificationDate(null)} className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl">
                  Sortir
                </button>
                <div className="flex items-center gap-4">
                  <div className="border-2 border-blue-500 px-4 py-2 rounded-lg">
                    <p className="text-sm text-slate-600">Temps d'installation:</p>
                    <p className="text-xl font-bold">{totals.tempsTotal} heures</p>
                  </div>
                  <div className="border-2 border-blue-500 px-4 py-2 rounded-lg">
                    <p className="text-sm text-slate-600">Nombre de pieds linéaires:</p>
                    <p className="text-xl font-bold">{totals.piedsLineaires} pieds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    // ===== MODAL PLANIFIER UNE INSTALLATION =====
  // ===== MODAL PLANIFIER UNE INSTALLATION =====
    const PlanifierInstallationModal = () => {
      if (!installationAPlanifier) return null;

      const joursNecessaires = calculerJoursNecessaires(installationAPlanifier.tempsEstimeInstallation);

      return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
            <div className="p-4 border-b border-slate-200 bg-gradient-to-r from-amber-400 to-yellow-500">
              <h2 className="text-xl font-bold text-slate-900">Planifier l'installation</h2>
              <p className="text-sm text-slate-700">{installationAPlanifier.num} - {installationAPlanifier.client}</p>
            </div>
            
            <div className="p-6 space-y-4">
              {/* Info temps */}
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-sm text-blue-600">Temps estimé: <strong>{installationAPlanifier.tempsEstimeInstallation}h</strong></p>
                {joursNecessaires > 1 && (
                  <p className="text-sm text-amber-600 mt-1">
                    ⚠️ Cette installation nécessite {joursNecessaires} jours de travail
                  </p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Date de début</label>
                <input 
                  type="date" 
                  value={formPlanif.date}
                  onChange={(e) => setFormPlanif({...formPlanif, date: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Équipe</label>
                <select 
                  value={formPlanif.equipe}
                  onChange={(e) => setFormPlanif({...formPlanif, equipe: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white"
                >
                  <option value="">Choisir une équipe</option>
                  {equipesList.map(eq => (
                    <option key={eq.id} value={eq.nom}>{eq.nom}</option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formPlanif.clientPresent}
                    onChange={(e) => setFormPlanif({...formPlanif, clientPresent: e.target.checked})}
                    className="w-5 h-5 rounded"
                  />
                  <span className="text-sm">Le client veut être présent</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formPlanif.representantPresent}
                    onChange={(e) => setFormPlanif({...formPlanif, representantPresent: e.target.checked})}
                    className="w-5 h-5 rounded"
                  />
                  <span className="text-sm">Le représentant veut être présent</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formPlanif.envoyerAvis}
                    onChange={(e) => setFormPlanif({...formPlanif, envoyerAvis: e.target.checked})}
                    className="w-5 h-5 rounded"
                  />
                  <span className="text-sm">Envoyer un avis d'installation au client</span>
                </label>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border-t border-slate-200 bg-slate-50">
              <button 
                onClick={() => { 
                  setInstallationAPlanifier(null); 
                  setFormPlanif({ date: '', equipe: '', clientPresent: false, representantPresent: false, envoyerAvis: false });
                }}
                className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Annuler
              </button>
              <button 
                onClick={() => {
                  if (formPlanif.date && formPlanif.equipe) {
                    planifierInstallation(installationAPlanifier.id, formPlanif.date, formPlanif.equipe, {
                      clientPresent: formPlanif.clientPresent,
                      representantPresent: formPlanif.representantPresent,
                      avisEnvoye: formPlanif.envoyerAvis
                    });
                    setFormPlanif({ date: '', equipe: '', clientPresent: false, representantPresent: false, envoyerAvis: false });
                  }
                }}
                disabled={!formPlanif.date || !formPlanif.equipe}
                className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-300 text-white font-medium rounded-lg"
              >
                Planifier
              </button>
            </div>
          </div>
        </div>
      );
    };
    // ===== MODAL INSTALLATIONS NON PLANIFIÉES =====
    const NonPlanifieesModal = () => {
      if (!showNonPlanifieesModal) return null;

      return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-amber-500 text-white">
              <div>
                <h2 className="text-xl font-bold">Installations non planifiées</h2>
                <p className="text-sm opacity-90">{installationsNonPlanifiees.length} installation(s) en attente</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setShowMapModal(true)} className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg flex items-center gap-2">
                  <Icon name="map" size={18}/>Voir sur la carte
                </button>
                <button onClick={() => setShowNonPlanifieesModal(false)} className="p-2 hover:bg-white/20 rounded-lg">
                  <Icon name="x" size={24}/>
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-4 space-y-4">
              {installationsNonPlanifiees.length === 0 ? (
                <div className="text-center py-12 text-slate-500">
                  <Icon name="check" size={48} className="mx-auto mb-4 opacity-30"/>
                  <p>Toutes les installations sont planifiées!</p>
                </div>
              ) : (
                installationsNonPlanifiees.map(cmd => (
                  <div key={cmd.id} className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono font-bold text-lg">{cmd.num}</span>
                          <span className={`px-2 py-1 text-xs font-bold rounded ${
                            cmd.typeCommande === 'Commercial' ? 'bg-purple-100 text-purple-700' :
                            cmd.typeCommande === 'Multiplan' ? 'bg-blue-100 text-blue-700' :
                            cmd.typeCommande === 'Multiphase' ? 'bg-orange-100 text-orange-700' :
                            'bg-slate-100 text-slate-700'
                          }`}>{cmd.typeCommande || 'Standard'}</span>
                          <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">{cmd.service}</span>
                        </div>
                        <p className="font-semibold">{cmd.client}</p>
                        <p className="text-sm text-slate-500">{cmd.adresse}</p>
                        
                        <div className="flex items-center gap-4 mt-3 text-sm">
                          <div className="bg-blue-100 px-3 py-1 rounded">
                            <span className="text-blue-600">Temps:</span>
                            <span className="font-bold text-blue-800 ml-1">{cmd.tempsEstimeInstallation || 0}h</span>
                          </div>
                          <div className="bg-emerald-100 px-3 py-1 rounded">
                            <span className="text-emerald-600">Pieds lin.:</span>
                            <span className="font-bold text-emerald-800 ml-1">{cmd.piedsLineaires || 0}</span>
                          </div>
                          {calculerJoursNecessaires(cmd.tempsEstimeInstallation) > 1 && (
                            <div className="bg-amber-100 px-3 py-1 rounded">
                              <span className="text-amber-600">⚠️ {calculerJoursNecessaires(cmd.tempsEstimeInstallation)} jours</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <button 
                          onClick={() => { setInstallationAPlanifier(cmd); setShowNonPlanifieesModal(false); }}
                          className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg"
                        >
                          Planifier
                        </button>
                        <button className="px-4 py-2 border border-slate-300 hover:bg-slate-50 rounded-lg text-sm">
                          Détails
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-4 border-t border-slate-200 bg-slate-50">
              <button onClick={() => setShowNonPlanifieesModal(false)} className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl">
                Fermer
              </button>
            </div>
          </div>
        </div>
      );
    };

    // ===== MODAL GESTION DES ÉQUIPES =====
    const EquipesModal = () => {
      if (!showEquipesModal) return null;

      return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-800 text-white">
              <h2 className="text-xl font-bold">Gestion des équipes</h2>
              <button onClick={() => setShowEquipesModal(false)} className="p-2 hover:bg-slate-700 rounded-lg">
                <Icon name="x" size={24}/>
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 space-y-4">
              {equipesList.map(equipe => {
                const installationsEquipe = installationsPlanifiees.filter(c => c.equipe === equipe.nom);
                const heuresTotal = installationsEquipe.reduce((acc, c) => acc + (parseInt(c.tempsEstimeInstallation) || 0), 0);
                
                return (
                  <div key={equipe.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                    <div className={`p-4 ${equipe.couleur} text-white flex items-center justify-between`}>
                      <div>
                        <h3 className="font-bold text-lg">{equipe.nom}</h3>
                        <p className="text-sm opacity-90">{installationsEquipe.length} installation(s) • {heuresTotal}h planifiées</p>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => supprimerEquipe(equipe.id)} className="p-2 hover:bg-white/20 rounded-lg">
                          <Icon name="x" size={18}/>
                        </button>
                      </div>
                    </div>
                    {equipe.membres && equipe.membres.length > 0 && (
                      <div className="p-3 bg-slate-50 flex flex-wrap gap-2">
                        {equipe.membres.map((membre, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white border text-slate-700 text-sm rounded">{membre}</span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {showAddEquipeModal && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <h4 className="font-bold mb-3">Nouvelle équipe</h4>
                  <div className="space-y-3">
                    <input 
                      type="text"
                      value={equipeForm.nom}
                      onChange={(e) => setEquipeForm({...equipeForm, nom: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg"
                      placeholder="Nom de l'équipe"
                    />
                    <div className="flex gap-2">
                      {couleursEquipes.map(c => (
                        <button 
                          key={c}
                          onClick={() => setEquipeForm({...equipeForm, couleur: c})}
                          className={`w-8 h-8 rounded-full ${c} ${equipeForm.couleur === c ? 'ring-2 ring-offset-2 ring-slate-800' : ''}`}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => setShowAddEquipeModal(false)} className="px-4 py-2 text-slate-600">Annuler</button>
                      <button onClick={ajouterEquipe} className="px-4 py-2 bg-emerald-500 text-white rounded-lg">Ajouter</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-between">
              <button onClick={() => setShowAddEquipeModal(true)} className="px-4 py-2 bg-amber-500 text-white rounded-lg flex items-center gap-2">
                <Icon name="plus" size={18}/>Nouvelle équipe
              </button>
              <button onClick={() => setShowEquipesModal(false)} className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl">Fermer</button>
            </div>
          </div>
        </div>
      );
    };

    // ===== MODAL ÉDITER INSTALLATION =====
    const EditInstallationModal = () => {
      if (!selectedInstallation) return null;

      return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <h2 className="text-xl font-bold">Modifier {selectedInstallation.num}</h2>
              <button onClick={() => setSelectedInstallation(null)} className="p-2 hover:bg-slate-100 rounded-lg">
                <Icon name="x" size={24}/>
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Date prévue</label>
                <input 
                  type="date" 
                  value={selectedInstallation.datePrevue || ''}
                  onChange={(e) => setCommandesList(prev => prev.map(cmd => cmd.id === selectedInstallation.id ? { ...cmd, datePrevue: e.target.value } : cmd))}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Équipe</label>
                <select 
                  value={selectedInstallation.equipe || ''}
                  onChange={(e) => setCommandesList(prev => prev.map(cmd => cmd.id === selectedInstallation.id ? { ...cmd, equipe: e.target.value } : cmd))}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white"
                >
                  <option value="">Sélectionner</option>
                  {equipesList.map(eq => <option key={eq.id} value={eq.nom}>{eq.nom}</option>)}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Temps estimé (h)</label>
                <input 
                  type="number" 
                  value={selectedInstallation.tempsEstimeInstallation || 0}
                  onChange={(e) => setCommandesList(prev => prev.map(cmd => cmd.id === selectedInstallation.id ? { ...cmd, tempsEstimeInstallation: parseInt(e.target.value) || 0 } : cmd))}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border-t border-slate-200 bg-slate-50">
              <button onClick={() => setSelectedInstallation(null)} className="px-4 py-2 text-slate-600">Annuler</button>
              <div className="flex gap-2">
                <button onClick={() => { terminerInstallation(selectedInstallation.id); setSelectedInstallation(null); }} className="px-4 py-2 bg-emerald-500 text-white rounded-lg">
                  Terminer
                </button>
                <button onClick={() => setSelectedInstallation(null)} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };

    // ===== RENDU PRINCIPAL =====
    return (
      <div className="space-y-6">
        {/* Modals */}
        <DateDetailModal />
        <NonPlanifieesModal />
        <EquipesModal />
        {selectedInstallation && <EditInstallationModal />}
        {installationAPlanifier && <PlanifierInstallationModal />}

        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Planification</h1>
            <p className="text-slate-500 mt-1">Planifiez les installations et les mesures</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Résumé semaine */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl">
              <p className="text-xs opacity-80">Cette semaine</p>
              <div className="flex items-center gap-4 text-sm">
                <span><strong>{statsHebdo.nbInstallations}</strong> install.</span>
                <span><strong>{statsHebdo.heuresTotal}</strong>h</span>
                <span><strong>{statsHebdo.piedsTotal}</strong> pi</span>
              </div>
            </div>
            
            {/* Boutons */}
            <button onClick={() => setShowEquipesModal(true)} className="px-4 py-2 border border-slate-300 rounded-xl hover:bg-slate-50 flex items-center gap-2">
              <Icon name="users" size={18}/>Équipes
            </button>
            <button onClick={() => setShowMapModal(true)} className="px-4 py-2 border border-slate-300 rounded-xl hover:bg-slate-50 flex items-center gap-2">
              <Icon name="map" size={18}/>Carte
            </button>
            <button onClick={() => setShowNonPlanifieesModal(true)} className="px-4 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold rounded-xl shadow-lg flex items-center gap-2">
              <Icon name="plus" size={20}/>Non planifiées ({installationsNonPlanifiees.length})
            </button>
          </div>
        </div>

        {/* Filtres */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-wrap items-center gap-4">
          {/* Type */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600">Type:</span>
            <select value={planificationFilterType} onChange={(e) => setPlanificationFilterType(e.target.value)} className="px-3 py-2 border border-slate-200 rounded-lg text-sm">
              <option value="tous">Tous</option>
              <option value="installation">Installation</option>
              <option value="mesure">Mesure</option>
            </select>
          </div>
          
          {/* Type de commande */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600">Commande:</span>
            <select value={planificationFilterCommande} onChange={(e) => setPlanificationFilterCommande(e.target.value)} className="px-3 py-2 border border-slate-200 rounded-lg text-sm">
              <option value="tous">Tous</option>
              <option value="standard">Standard</option>
              <option value="commercial">Commercial</option>
              <option value="multiplan">Multiplan</option>
              <option value="multiphase">Multiphase</option>
            </select>
          </div>
          
          {/* Équipe */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600">Équipe:</span>
            <select value={planificationFilterEquipe} onChange={(e) => setPlanificationFilterEquipe(e.target.value)} className="px-3 py-2 border border-slate-200 rounded-lg text-sm">
              <option value="toutes">Toutes</option>
              {equipesList.map(eq => <option key={eq.id} value={eq.nom}>{eq.nom}</option>)}
            </select>
          </div>
          
          {/* Semaine */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600">Semaine:</span>
            <select value={planificationFilterSemaine} onChange={(e) => setPlanificationFilterSemaine(e.target.value)} className="px-3 py-2 border border-slate-200 rounded-lg text-sm">
              <option value="toutes">Toutes</option>
              {semaines.map(s => <option key={s.num} value={s.num}>{s.label}</option>)}
            </select>
          </div>
          
          {/* Badge installations prêtes */}
          <div className="ml-auto">
            <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded">
              {installationsNonPlanifiees.length} prêtes à planifier
            </span>
          </div>
        </div>

        {/* Calendrier */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          {/* Navigation mois */}
          <div className="flex items-center justify-between p-4 bg-slate-800 text-white">
            <button onClick={() => setPlanificationMonth(new Date(planificationMonth.getFullYear(), planificationMonth.getMonth() - 1, 1))} className="p-2 hover:bg-slate-700 rounded-full">
              <Icon name="left" size={28}/>
            </button>
            <h2 className="text-2xl font-bold">{monthNames[planificationMonth.getMonth()]} {planificationMonth.getFullYear()}</h2>
            <button onClick={() => setPlanificationMonth(new Date(planificationMonth.getFullYear(), planificationMonth.getMonth() + 1, 1))} className="p-2 hover:bg-slate-700 rounded-full">
              <Icon name="right" size={28}/>
            </button>
          </div>

          {/* En-têtes des jours */}
          <div className="grid grid-cols-7 bg-slate-700 text-white">
            {dayNamesShort.map(day => (
              <div key={day} className="p-3 text-center border-r border-slate-600 last:border-r-0">
                <p className="font-semibold uppercase text-sm">{day}</p>
              </div>
            ))}
          </div>

          {/* Grille des jours */}
          <div className="grid grid-cols-7">
            {days.map((dayInfo, idx) => {
              const totals = getTotalsForDate(dayInfo.date);
              const installations = getInstallationsForDate(dayInfo.date);
              const isWeekend = dayInfo.date.getDay() === 0 || dayInfo.date.getDay() === 6;
              const isToday = formatDateKey(dayInfo.date) === formatDateKey(new Date());
              
              return (
                <div 
                  key={idx} 
                  onClick={() => totals.count > 0 && setSelectedPlanificationDate(dayInfo.date)} 
                  className={`min-h-[140px] border-r border-b border-slate-200 p-2 transition-colors
                    ${!dayInfo.currentMonth ? 'bg-slate-100 text-slate-400' : isWeekend ? 'bg-slate-50' : 'bg-white'} 
                    ${totals.count > 0 ? 'cursor-pointer hover:bg-blue-50' : ''}
                    ${isToday && dayInfo.currentMonth ? 'ring-2 ring-inset ring-blue-500' : ''}
                  `}
                >
                  {/* Numéro du jour + stats */}
                  <div className="flex items-start justify-between mb-1">
                    <span className={`text-lg font-bold ${!dayInfo.currentMonth ? 'text-slate-300' : isToday ? 'bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm' : ''}`}>
                      {dayInfo.day}
                    </span>
                    {totals.count > 0 && dayInfo.currentMonth && (
                      <div className="flex items-center gap-1">
                        {depasseJournee(totals.tempsTotal) && (
                          <span className="text-amber-500 text-xs">ⓘ</span>
                        )}
                        <span className="bg-slate-800 text-white text-xs font-bold px-1.5 py-0.5 rounded">{totals.count}</span>
                        <span className="bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded">{totals.tempsTotal}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Installations du jour */}
                  {dayInfo.currentMonth && installations.slice(0, 2).map(cmd => {
                    const tempsHeures = parseInt(cmd.tempsEstimeInstallation) || 0;
                    const depasse = depasseJournee(tempsHeures);
                    
                    return (
                      <div key={cmd.id} className={`mb-1 p-1.5 rounded text-xs text-white relative ${cmd.service === 'Mesure' ? 'bg-cyan-500' : getEquipeCouleur(cmd.equipe)}`}>
                        {depasse && (
                          <span className="absolute -top-1 -right-1 bg-amber-400 text-amber-900 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">!</span>
                        )}
                        <p className="font-bold truncate">{cmd.num}</p>
                        <p className="truncate opacity-90 text-[10px]">{cmd.client}</p>
                        <div className="flex items-center justify-between mt-0.5 text-[10px] opacity-75">
                          <span>{cmd.equipe?.split(' ')[1] || cmd.equipe}</span>
                          <span>{cmd.tempsEstimeInstallation}h • {cmd.piedsLineaires}pi</span>
                        </div>
                      </div>
                    );
                  })}
                  
                  {installations.length > 2 && dayInfo.currentMonth && (
                    <p className="text-xs text-blue-600 font-medium text-center">+{installations.length - 2} autres</p>
                  )}
                  
                  {/* Résumé par équipe */}
                  {totals.count > 0 && dayInfo.currentMonth && Object.keys(totals.byEquipe).length > 0 && (
                    <div className="mt-1 pt-1 border-t border-slate-200 text-[10px] text-slate-500">
                      {Object.entries(totals.byEquipe).slice(0, 2).map(([equipe, data]) => (
                        <div key={equipe} className="flex justify-between">
                          <span>{equipe?.split(' ')[1] || equipe}</span>
                          <span>{data.count} • {data.heures}h</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
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
          <div key={inst.id} className={`rounded-2xl shadow-sm border-2 p-6 ${getActiviteCardBg(inst.activite)}`}>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono font-bold text-lg">{inst.num}</span>
                  <span className="px-2 py-0.5 rounded bg-white/20 text-xs font-semibold">{inst.activite}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${inst.statut === 'Complétée' ? 'bg-white/30' : inst.equipe ? 'bg-white/20' : 'bg-black/10'}`}>
                    {inst.statut === 'Complétée' ? 'Complétée' : inst.equipe ? 'Planifiée' : 'Non planifiée'}
                  </span>
                </div>
                <p className="text-lg font-medium">{inst.client}</p>
                <p className="text-sm opacity-75 mt-1">{inst.adresse}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm">
                  <p className="opacity-75">Équipe</p>
                  <p className="font-medium">{inst.equipe || 'Non assignée'}</p>
                </div>
                <div className="text-sm">
                  <p className="opacity-75">Date</p>
                  <p className="font-medium">{inst.dateInstallation}</p>
                </div>
                <button className="px-4 py-2 bg-white/20 hover:bg-white/30 font-medium rounded-lg flex items-center gap-2">
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
              <div className="bg-yellow-400 p-4 rounded-xl border-2 border-yellow-500">
                <p className="text-sm text-yellow-900">Cueillettes</p>
                <p className="text-2xl font-bold text-yellow-900 mt-1">{cueillettes.filter(c => c.type === 'Cueillette').length}</p>
              </div>
              <div className="bg-blue-500 p-4 rounded-xl border-2 border-blue-600">
                <p className="text-sm text-blue-100">Livraisons</p>
                <p className="text-2xl font-bold text-white mt-1">{cueillettes.filter(c => c.type === 'Livraison').length}</p>
              </div>
              <div className="bg-green-500 p-4 rounded-xl border-2 border-green-600">
                <p className="text-sm text-green-100">Transports</p>
                <p className="text-2xl font-bold text-white mt-1">{cueillettes.filter(c => c.type === 'Transport').length}</p>
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
                    <tr key={item.id} className={`${item.type === 'Cueillette' ? 'bg-yellow-50 hover:bg-yellow-100' : item.type === 'Livraison' ? 'bg-blue-50 hover:bg-blue-100' : 'bg-green-50 hover:bg-green-100'}`}>
                      <td className="px-6 py-4">
                        <div className={`inline-block px-4 py-2 rounded-lg border-2 ${item.type === 'Cueillette' ? 'bg-yellow-400 border-yellow-500 text-yellow-900' : item.type === 'Livraison' ? 'bg-blue-500 border-blue-600 text-white' : 'bg-green-500 border-green-600 text-white'}`}>
                          <span className="font-bold text-sm">{item.type}</span>
                        </div>
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
                        <div key={c.id} className={`p-2 rounded-lg text-xs border-2 ${c.type === 'Cueillette' ? 'bg-yellow-400 border-yellow-500 text-yellow-900' : c.type === 'Livraison' ? 'bg-blue-500 border-blue-600 text-white' : 'bg-green-500 border-green-600 text-white'}`}>
                          <div className="font-bold">{c.heure}</div>
                          <div className="truncate">{c.client}</div>
                          <div className="font-semibold truncate">{c.type}</div>
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
        <header className="bg-slate-800 shadow-sm border-b border-slate-700 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-slate-700 rounded-xl text-white">
              <Icon name={sidebarOpen ? 'x' : 'menu'} size={24}/>
            </button>
            
            {/* Légende des couleurs */}
            <div className="flex items-center gap-2 ml-4">
              <div className="px-3 py-1.5 bg-blue-500 text-white rounded font-bold text-sm border-2 border-blue-600">
                Livraison
              </div>
              <div className="px-3 py-1.5 bg-yellow-400 text-yellow-900 rounded font-bold text-sm border-2 border-yellow-500">
                Cueillette
              </div>
              <div className="px-3 py-1.5 bg-red-600 text-white rounded font-bold text-sm border-2 border-red-700">
                Installation
              </div>
              <div className="px-3 py-1.5 bg-green-500 text-white rounded font-bold text-sm border-2 border-green-600">
                Transport
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-700 rounded-xl relative text-white">
              <Icon name="bell" size={22}/>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"/>
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-semibold text-white">Admin Utilisateur</p>
                <p className="text-xs text-slate-400">admin@rampesgardex.com</p>
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