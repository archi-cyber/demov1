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
  
 

  // === ÉTATS TERRAIN/INTERVENTIONS ===
  const [terrainTab, setTerrainTab] = useState('aujourdhui'); // aujourdhui, semaine, toutes
  const [terrainFilterType, setTerrainFilterType] = useState('tous'); // tous, installation, livraison, cueillette, transport
  const [selectedIntervention, setSelectedIntervention] = useState(null);
  const [showInspectionModal, setShowInspectionModal] = useState(false);
  const [inspectionForm, setInspectionForm] = useState({
    heureArrivee: '',
    heureDepart: '',
    personneRessource: '',
    telephone: '',
    // Inspection avant chantier
    accessibiliteBalcon: null, // 'oui', 'non', 'na'
    balconEncombre: null,
    niveauBalconConforme: null,
    backingConforme: null,
    colonneCapage: null,
    noteAvant: '',
    photoAvant: null,
    // Travaux
    travauxNonComplete: false,
    travauxNonCompleteNote: '',
    // Inspection fin de chantier
    mainsInstallees: null,
    cacheVisInstallees: null,
    capsulesPoteaux: null,
    vuEnsemble: null,
    photosGlobal: [],
    noteApres: '',
    // Signatures
    signatureInstallateur: null,
    signatureClient: null,
    dateSignature: ''
  });

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

  // === FORMULAIRES SPÉCIFIQUES PAR TYPE ===
const [showLivraisonModal, setShowLivraisonModal] = useState(false);
const [showCueilletteModal, setShowCueilletteModal] = useState(false);
const [showTransportModal, setShowTransportModal] = useState(false);

const [livraisonForm, setLivraisonForm] = useState({
  heureArrivee: '',
  heureDepart: '',
  personneReception: '',
  telephone: '',
  // Vérifications livraison
  materielComplet: null,
  etatMateriel: null,
  quantiteConforme: null,
  emplacementLivraison: '',
  accessibilite: null,
  notelivraison: '',
  // Signature
  signatureLivreur: null,
  signatureClient: null,
  photoPreuve: null,
  dateSignature: ''
});

const [cueilletteForm, setCueilletteForm] = useState({
  heureArrivee: '',
  heureDepart: '',
  personneContact: '',
  telephone: '',
  // Vérifications cueillette
  materielIdentifie: null,
  etatMaterielRecupere: '',
  quantiteRecuperee: 0,
  emplacementCueillette: '',
  difficulteAcces: null,
  noteCueillette: '',
  // Matériel récupéré
  listeMateriels: [],
  photosAvant: [],
  photosApres: [],
  // Signature
  signatureChauffeur: null,
  signatureClient: null,
  dateSignature: ''
});

const [transportForm, setTransportForm] = useState({
  heureDepart: '',
  heureArriveeDestination: '',
  adresseDepart: '',
  adresseArrivee: '',
  // Vérifications transport
  vehiculeInspecte: null,
  chargementSecurise: null,
  documentationComplete: null,
  kmDepart: '',
  kmArrivee: '',
  noteTransport: '',
  // Équipe transportée
  membresEquipe: [],
  materielTransporte: '',
  // Signature
  signatureChauffeur: null,
  dateSignature: ''
});

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
    { id: 'interventions', icon: 'wrench', label: 'Interventions' },
    { id: 'cueillettes', icon: 'truck', label: 'Cueillettes /Transport' },
    { id: 'inventaire', icon: 'package', label: 'Inventaire' },
    { id: 'achats', icon: 'cart', label: 'Achats' },
    { id: 'rentabilite', icon: 'trend', label: 'Rentabilité' },
    { id: 'attentes', icon: 'alert', label: 'Attentes' },
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
    },
    // === EXEMPLES À AJOUTER DANS commandesList ===

// Exemple LIVRAISON
{
  id: 'LIV001',
  num: 'LIV-2026-001',
  client: 'Jean Tremblay',
  telephone: '514-555-0101',
  adresse: '123 Rue des Érables, Montréal',
  service: 'Livraison',
  typeCommande: 'Matériel rampe',
  datePrevue: '2026-01-28',
  statut: 'Active',
  equipe: 'Équipe A',
  tempsEstimeInstallation: 1,
  formulaireComplete: false
},

// Exemple CUEILLETTE
{
  id: 'CUE001',
  num: 'CUE-2026-001',
  client: 'Marie Lavoie',
  telephone: '514-555-0202',
  adresse: '456 Boulevard St-Laurent, Montréal',
  service: 'Cueillette',
  typeCommande: 'Récupération rampe',
  datePrevue: '2026-01-28',
  statut: 'Active',
  equipe: 'Équipe B',
  tempsEstimeInstallation: 1,
  formulaireComplete: false
},

// Exemple TRANSPORT
{
  id: 'TRP001',
  num: 'TRP-2026-001',
  client: 'Pierre Gagnon',
  telephone: '514-555-0303',
  adresse: '789 Avenue du Parc, Montréal',
  service: 'Transport',
  typeCommande: 'Transport équipe',
  datePrevue: '2026-01-28',
  statut: 'Active',
  equipe: 'Équipe C',
  tempsEstimeInstallation: 2,
  formulaireComplete: false
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
  // === INTERVENTIONS TERRAIN ===
 // === INTERVENTIONS TERRAIN ===
const Interventions = () => {
  const today = '2026-01-28';
  
  const getEquipeCouleur = (equipeNom) => {
    const equipe = equipesList.find(e => e.nom === equipeNom);
    return equipe ? equipe.couleur : 'bg-slate-500';
  };
  
  // Filtrer les interventions
  const getInterventions = () => {
    let filtered = commandesList.filter(cmd => 
      cmd.statut === 'Active' && 
      cmd.equipe && 
      cmd.datePrevue &&
      (cmd.service === 'Installation' || cmd.service === 'Livraison' || cmd.service === 'Cueillette' || cmd.service === 'Transport')
    );
    
    // Filtre par type
    if (terrainFilterType !== 'tous') {
      filtered = filtered.filter(cmd => cmd.service.toLowerCase() === terrainFilterType);
    }
    
    // Filtre par période
    if (terrainTab === 'aujourdhui') {
      filtered = filtered.filter(cmd => cmd.datePrevue === today);
    } else if (terrainTab === 'semaine') {
      const currentDate = new Date(today);
      const weekStart = new Date(currentDate);
      weekStart.setDate(currentDate.getDate() - currentDate.getDay());
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      
      filtered = filtered.filter(cmd => {
        const cmdDate = new Date(cmd.datePrevue);
        return cmdDate >= weekStart && cmdDate <= weekEnd;
      });
    }
    // Si 'toutes', on garde tout
    
    return filtered;
  };

  const interventions = getInterventions();

  // Obtenir la couleur du badge selon le type
  const getTypeBadgeColor = (service) => {
    switch(service) {
      case 'Installation': return 'bg-red-500 text-white';
      case 'Livraison': return 'bg-blue-500 text-white';
      case 'Cueillette': return 'bg-yellow-500 text-yellow-900';
      case 'Transport': return 'bg-green-500 text-white';
      default: return 'bg-slate-500 text-white';
    }
  };

  // Obtenir la couleur de bordure selon le type
  const getTypeBorderColor = (service) => {
    switch(service) {
      case 'Installation': return 'border-l-red-500';
      case 'Livraison': return 'border-l-blue-500';
      case 'Cueillette': return 'border-l-yellow-500';
      case 'Transport': return 'border-l-green-500';
      default: return 'border-l-slate-500';
    }
  };

  // Ouvrir le bon formulaire selon le type
  const ouvrirFormulaire = (intervention) => {
    setSelectedIntervention(intervention);
    
    switch(intervention.service) {
      case 'Installation':
        setInspectionForm({
          heureArrivee: '',
          heureDepart: '',
          personneRessource: intervention.client || '',
          telephone: intervention.telephone || '',
          accessibiliteBalcon: null,
          balconEncombre: null,
          niveauBalconConforme: null,
          backingConforme: null,
          colonneCapage: null,
          noteAvant: '',
          photoAvant: null,
          travauxNonComplete: false,
          travauxNonCompleteNote: '',
          mainsInstallees: null,
          cacheVisInstallees: null,
          capsulesPoteaux: null,
          vuEnsemble: null,
          photosGlobal: [],
          noteApres: '',
          signatureInstallateur: null,
          signatureClient: null,
          dateSignature: today
        });
        setShowInspectionModal(true);
        break;
        
      case 'Livraison':
        setLivraisonForm({
          heureArrivee: '',
          heureDepart: '',
          personneReception: intervention.client || '',
          telephone: '',
          materielComplet: null,
          etatMateriel: null,
          quantiteConforme: null,
          emplacementLivraison: '',
          accessibilite: null,
          noteLivraison: '',
          signatureLivreur: null,
          signatureClient: null,
          photoPreuve: null,
          dateSignature: today
        });
        setShowLivraisonModal(true);
        break;
        
      case 'Cueillette':
        setCueilletteForm({
          heureArrivee: '',
          heureDepart: '',
          personneContact: intervention.client || '',
          telephone: '',
          materielIdentifie: null,
          etatMaterielRecupere: '',
          quantiteRecuperee: 0,
          emplacementCueillette: '',
          difficulteAcces: null,
          noteCueillette: '',
          listeMateriels: [],
          photosAvant: [],
          photosApres: [],
          signatureChauffeur: null,
          signatureClient: null,
          dateSignature: today
        });
        setShowCueilletteModal(true);
        break;
        
      case 'Transport':
        setTransportForm({
          heureDepart: '',
          heureArriveeDestination: '',
          adresseDepart: intervention.adresse || '',
          adresseArrivee: '',
          vehiculeInspecte: null,
          chargementSecurise: null,
          documentationComplete: null,
          kmDepart: '',
          kmArrivee: '',
          noteTransport: '',
          membresEquipe: [],
          materielTransporte: '',
          signatureChauffeur: null,
          dateSignature: today
        });
        setShowTransportModal(true);
        break;
        
      default:
        break;
    }
  };

  // Sauvegarder le formulaire
  const sauvegarderFormulaire = (type) => {
    if (selectedIntervention) {
      let formData;
      switch(type) {
        case 'installation': formData = inspectionForm; break;
        case 'livraison': formData = livraisonForm; break;
        case 'cueillette': formData = cueilletteForm; break;
        case 'transport': formData = transportForm; break;
        default: return;
      }
      
      setCommandesList(prev => prev.map(cmd => 
        cmd.id === selectedIntervention.id 
          ? { ...cmd, formulaire: formData, formulaireComplete: true, typeFormulaire: type }
          : cmd
      ));
      
      // Fermer tous les modals
      setShowInspectionModal(false);
      setShowLivraisonModal(false);
      setShowCueilletteModal(false);
      setShowTransportModal(false);
      setSelectedIntervention(null);
    }
  };

  // Stats du jour/semaine/total
  const statsJour = {
    total: interventions.length,
    installations: interventions.filter(i => i.service === 'Installation').length,
    livraisons: interventions.filter(i => i.service === 'Livraison').length,
    cueillettes: interventions.filter(i => i.service === 'Cueillette').length,
    transports: interventions.filter(i => i.service === 'Transport').length,
    heuresTotal: interventions.reduce((acc, i) => acc + (parseInt(i.tempsEstimeInstallation) || 1), 0)
  };

  // Composant CheckboxGroup réutilisable
  const CheckboxGroup = ({ label, value, onChange, options = ['fait', 'na', 'oui', 'non'] }) => (
    <div className="flex items-center justify-between py-2 border-b border-slate-100">
      <span className="text-sm flex-1">{label}</span>
      <div className="flex items-center gap-1">
        {options.includes('fait') && (
          <button 
            onClick={() => onChange('fait')}
            className={`w-10 h-8 rounded text-xs font-semibold ${value === 'fait' ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-600'}`}
          >Fait</button>
        )}
        {options.includes('na') && (
          <button 
            onClick={() => onChange('na')}
            className={`w-10 h-8 rounded text-xs font-semibold ${value === 'na' ? 'bg-slate-500 text-white' : 'bg-slate-100 text-slate-600'}`}
          >N/A</button>
        )}
        {options.includes('oui') && (
          <button 
            onClick={() => onChange('oui')}
            className={`w-10 h-8 rounded text-xs font-semibold ${value === 'oui' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-600'}`}
          >Oui</button>
        )}
        {options.includes('non') && (
          <button 
            onClick={() => onChange('non')}
            className={`w-10 h-8 rounded text-xs font-semibold ${value === 'non' ? 'bg-red-500 text-white' : 'bg-slate-100 text-slate-600'}`}
          >Non</button>
        )}
      </div>
    </div>
  );

  // ===== MODAL INSTALLATION (existant) =====
  const InspectionModal = () => {
    if (!showInspectionModal || !selectedIntervention) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] overflow-hidden flex flex-col">
          <div className="p-4 border-b border-slate-200 bg-red-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Icon name="wrench" size={24}/>
                  Inspection Installation #{selectedIntervention.num}
                </h2>
                <p className="text-sm text-red-100">{selectedIntervention.client}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm bg-red-700 px-3 py-1 rounded">Date: {today}</span>
                <button onClick={() => setShowInspectionModal(false)} className="p-2 hover:bg-red-700 rounded-lg">
                  <Icon name="x" size={24}/>
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Infos générales */}
            <div className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-3">Informations du projet</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Personne ressource</label>
                  <input 
                    type="text"
                    value={inspectionForm.personneRessource}
                    onChange={(e) => setInspectionForm({...inspectionForm, personneRessource: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Téléphone</label>
                  <input 
                    type="tel"
                    value={inspectionForm.telephone}
                    onChange={(e) => setInspectionForm({...inspectionForm, telephone: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Heure arrivée</label>
                  <input 
                    type="time"
                    value={inspectionForm.heureArrivee}
                    onChange={(e) => setInspectionForm({...inspectionForm, heureArrivee: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Heure départ</label>
                  <input 
                    type="time"
                    value={inspectionForm.heureDepart}
                    onChange={(e) => setInspectionForm({...inspectionForm, heureDepart: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Inspection avant chantier */}
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h3 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <Icon name="alert" size={18}/>
                Inspection avant chantier
              </h3>
              <div className="space-y-1">
                <CheckboxGroup 
                  label="Accessibilité au balcon (Encombré)"
                  value={inspectionForm.accessibiliteBalcon}
                  onChange={(v) => setInspectionForm({...inspectionForm, accessibiliteBalcon: v})}
                />
                <CheckboxGroup 
                  label="Niveau du balcon conforme au plan"
                  value={inspectionForm.niveauBalconConforme}
                  onChange={(v) => setInspectionForm({...inspectionForm, niveauBalconConforme: v})}
                />
                <CheckboxGroup 
                  label="Backing conforme"
                  value={inspectionForm.backingConforme}
                  onChange={(v) => setInspectionForm({...inspectionForm, backingConforme: v})}
                />
                <CheckboxGroup 
                  label="Colonne capage fait"
                  value={inspectionForm.colonneCapage}
                  onChange={(v) => setInspectionForm({...inspectionForm, colonneCapage: v})}
                />
              </div>
              <div className="mt-3">
                <textarea 
                  value={inspectionForm.noteAvant}
                  onChange={(e) => setInspectionForm({...inspectionForm, noteAvant: e.target.value})}
                  className="w-full px-3 py-2 border border-amber-200 rounded-lg text-sm resize-none"
                  rows={2}
                  placeholder="Notes avant chantier..."
                />
              </div>
              <button className="mt-3 flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg text-sm font-medium">
                <Icon name="camera" size={16}/>Prendre photo (avant)
              </button>
            </div>

            {/* Travaux non complété */}
            <div className="bg-red-50 rounded-xl p-4 border border-red-200">
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox"
                  checked={inspectionForm.travauxNonComplete}
                  onChange={(e) => setInspectionForm({...inspectionForm, travauxNonComplete: e.target.checked})}
                  className="w-5 h-5 rounded"
                />
                <span className="font-semibold text-red-800">Travaux non complété</span>
              </label>
              {inspectionForm.travauxNonComplete && (
                <textarea 
                  value={inspectionForm.travauxNonCompleteNote}
                  onChange={(e) => setInspectionForm({...inspectionForm, travauxNonCompleteNote: e.target.value})}
                  className="w-full mt-3 px-3 py-2 border border-red-200 rounded-lg text-sm resize-none"
                  rows={2}
                  placeholder="Détails des travaux non complétés..."
                />
              )}
            </div>

            {/* Inspection fin de chantier */}
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <Icon name="check" size={18}/>
                Inspection fin de chantier
              </h3>
              <div className="space-y-1">
                <CheckboxGroup 
                  label="Mains installées"
                  value={inspectionForm.mainsInstallees}
                  onChange={(v) => setInspectionForm({...inspectionForm, mainsInstallees: v})}
                />
                <CheckboxGroup 
                  label="Cache-vis installés"
                  value={inspectionForm.cacheVisInstallees}
                  onChange={(v) => setInspectionForm({...inspectionForm, cacheVisInstallees: v})}
                />
                <CheckboxGroup 
                  label="Capsules sur les poteaux installées"
                  value={inspectionForm.capsulesPoteaux}
                  onChange={(v) => setInspectionForm({...inspectionForm, capsulesPoteaux: v})}
                />
                <CheckboxGroup 
                  label="Vue d'ensemble (niveau)"
                  value={inspectionForm.vuEnsemble}
                  onChange={(v) => setInspectionForm({...inspectionForm, vuEnsemble: v})}
                />
              </div>
              <div className="mt-3">
                <textarea 
                  value={inspectionForm.noteApres}
                  onChange={(e) => setInspectionForm({...inspectionForm, noteApres: e.target.value})}
                  className="w-full px-3 py-2 border border-green-200 rounded-lg text-sm resize-none"
                  rows={2}
                  placeholder="Notes fin de chantier..."
                />
              </div>
              <button className="mt-3 flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium">
                <Icon name="camera" size={16}/>PHOTOS global du projet
              </button>
            </div>

            {/* Signatures */}
            <div className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-3">Signatures</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Signature Installateur</label>
                  <div className="h-24 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-white cursor-pointer hover:border-slate-400">
                    <span className="text-sm text-slate-400">Touchez pour signer</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Signature Client</label>
                  <div className="h-24 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-white cursor-pointer hover:border-slate-400">
                    <span className="text-sm text-slate-400">Touchez pour signer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
            <button onClick={() => setShowInspectionModal(false)} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              Annuler
            </button>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-slate-300 rounded-lg flex items-center gap-2">
                <Icon name="save" size={16}/>Brouillon
              </button>
              <button 
                onClick={() => sauvegarderFormulaire('installation')}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg flex items-center gap-2"
              >
                <Icon name="check" size={16}/>Terminer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ===== MODAL LIVRAISON =====
  const LivraisonModal = () => {
    if (!showLivraisonModal || !selectedIntervention) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] overflow-hidden flex flex-col">
          <div className="p-4 border-b border-slate-200 bg-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Icon name="truck" size={24}/>
                  Bon de Livraison #{selectedIntervention.num}
                </h2>
                <p className="text-sm text-blue-100">{selectedIntervention.client}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm bg-blue-700 px-3 py-1 rounded">Date: {today}</span>
                <button onClick={() => setShowLivraisonModal(false)} className="p-2 hover:bg-blue-700 rounded-lg">
                  <Icon name="x" size={24}/>
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Infos générales */}
            <div className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-3">Informations de livraison</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Personne qui reçoit</label>
                  <input 
                    type="text"
                    value={livraisonForm.personneReception}
                    onChange={(e) => setLivraisonForm({...livraisonForm, personneReception: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Téléphone</label>
                  <input 
                    type="tel"
                    value={livraisonForm.telephone}
                    onChange={(e) => setLivraisonForm({...livraisonForm, telephone: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Heure arrivée</label>
                  <input 
                    type="time"
                    value={livraisonForm.heureArrivee}
                    onChange={(e) => setLivraisonForm({...livraisonForm, heureArrivee: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Heure départ</label>
                  <input 
                    type="time"
                    value={livraisonForm.heureDepart}
                    onChange={(e) => setLivraisonForm({...livraisonForm, heureDepart: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Vérification matériel */}
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <Icon name="package" size={18}/>
                Vérification du matériel
              </h3>
              <div className="space-y-1">
                <CheckboxGroup 
                  label="Matériel complet selon bon de commande"
                  value={livraisonForm.materielComplet}
                  onChange={(v) => setLivraisonForm({...livraisonForm, materielComplet: v})}
                  options={['oui', 'non']}
                />
                <CheckboxGroup 
                  label="État du matériel (sans dommage)"
                  value={livraisonForm.etatMateriel}
                  onChange={(v) => setLivraisonForm({...livraisonForm, etatMateriel: v})}
                  options={['oui', 'non']}
                />
                <CheckboxGroup 
                  label="Quantité conforme"
                  value={livraisonForm.quantiteConforme}
                  onChange={(v) => setLivraisonForm({...livraisonForm, quantiteConforme: v})}
                  options={['oui', 'non']}
                />
                <CheckboxGroup 
                  label="Accessibilité du lieu de livraison"
                  value={livraisonForm.accessibilite}
                  onChange={(v) => setLivraisonForm({...livraisonForm, accessibilite: v})}
                  options={['oui', 'non']}
                />
              </div>
            </div>

            {/* Emplacement */}
            <div className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-3">Détails de la livraison</h3>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Emplacement de dépose</label>
                <input 
                  type="text"
                  value={livraisonForm.emplacementLivraison}
                  onChange={(e) => setLivraisonForm({...livraisonForm, emplacementLivraison: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  placeholder="Ex: Garage, entrée principale, côté maison..."
                />
              </div>
              <div className="mt-3">
                <label className="block text-xs text-slate-500 mb-1">Notes / Remarques</label>
                <textarea 
                  value={livraisonForm.noteLivraison}
                  onChange={(e) => setLivraisonForm({...livraisonForm, noteLivraison: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm resize-none"
                  rows={3}
                  placeholder="Notes sur la livraison..."
                />
              </div>
              <button className="mt-3 flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium">
                <Icon name="camera" size={16}/>Photo preuve de livraison
              </button>
            </div>

            {/* Signatures */}
            <div className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-3">Signatures</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Signature Livreur</label>
                  <div className="h-24 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-white cursor-pointer hover:border-slate-400">
                    <span className="text-sm text-slate-400">Touchez pour signer</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Signature Client</label>
                  <div className="h-24 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-white cursor-pointer hover:border-slate-400">
                    <span className="text-sm text-slate-400">Touchez pour signer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
            <button onClick={() => setShowLivraisonModal(false)} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              Annuler
            </button>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-slate-300 rounded-lg flex items-center gap-2">
                <Icon name="save" size={16}/>Brouillon
              </button>
              <button 
                onClick={() => sauvegarderFormulaire('livraison')}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center gap-2"
              >
                <Icon name="check" size={16}/>Confirmer livraison
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ===== MODAL CUEILLETTE =====
  const CueilletteModal = () => {
    if (!showCueilletteModal || !selectedIntervention) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] overflow-hidden flex flex-col">
          <div className="p-4 border-b border-slate-200 bg-yellow-500 text-yellow-900">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Icon name="package" size={24}/>
                  Bon de Cueillette #{selectedIntervention.num}
                </h2>
                <p className="text-sm text-yellow-800">{selectedIntervention.client}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm bg-yellow-600 text-white px-3 py-1 rounded">Date: {today}</span>
                <button onClick={() => setShowCueilletteModal(false)} className="p-2 hover:bg-yellow-600 hover:text-white rounded-lg">
                  <Icon name="x" size={24}/>
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Infos générales */}
            <div className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-3">Informations de cueillette</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Personne contact</label>
                  <input 
                    type="text"
                    value={cueilletteForm.personneContact}
                    onChange={(e) => setCueilletteForm({...cueilletteForm, personneContact: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Téléphone</label>
                  <input 
                    type="tel"
                    value={cueilletteForm.telephone}
                    onChange={(e) => setCueilletteForm({...cueilletteForm, telephone: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Heure arrivée</label>
                  <input 
                    type="time"
                    value={cueilletteForm.heureArrivee}
                    onChange={(e) => setCueilletteForm({...cueilletteForm, heureArrivee: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Heure départ</label>
                  <input 
                    type="time"
                    value={cueilletteForm.heureDepart}
                    onChange={(e) => setCueilletteForm({...cueilletteForm, heureDepart: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Vérification matériel à récupérer */}
            <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
              <h3 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                <Icon name="package" size={18}/>
                Matériel à récupérer
              </h3>
              <div className="space-y-1">
                <CheckboxGroup 
                  label="Matériel correctement identifié"
                  value={cueilletteForm.materielIdentifie}
                  onChange={(v) => setCueilletteForm({...cueilletteForm, materielIdentifie: v})}
                  options={['oui', 'non']}
                />
                <CheckboxGroup 
                  label="Difficulté d'accès"
                  value={cueilletteForm.difficulteAcces}
                  onChange={(v) => setCueilletteForm({...cueilletteForm, difficulteAcces: v})}
                  options={['oui', 'non']}
                />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Quantité récupérée</label>
                  <input 
                    type="number"
                    value={cueilletteForm.quantiteRecuperee}
                    onChange={(e) => setCueilletteForm({...cueilletteForm, quantiteRecuperee: parseInt(e.target.value) || 0})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Emplacement</label>
                  <input 
                    type="text"
                    value={cueilletteForm.emplacementCueillette}
                    onChange={(e) => setCueilletteForm({...cueilletteForm, emplacementCueillette: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                    placeholder="Où se trouve le matériel"
                  />
                </div>
              </div>
            </div>

            {/* État du matériel */}
            <div className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-3">État du matériel récupéré</h3>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Description de l'état</label>
                <select 
                  value={cueilletteForm.etatMaterielRecupere}
                  onChange={(e) => setCueilletteForm({...cueilletteForm, etatMaterielRecupere: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white"
                >
                  <option value="">Sélectionner l'état</option>
                  <option value="excellent">Excellent - Comme neuf</option>
                  <option value="bon">Bon - Usure normale</option>
                  <option value="acceptable">Acceptable - Quelques dommages mineurs</option>
                  <option value="mauvais">Mauvais - Dommages importants</option>
                  <option value="inutilisable">Inutilisable - À jeter</option>
                </select>
              </div>
              <div className="mt-3">
                <label className="block text-xs text-slate-500 mb-1">Notes / Remarques</label>
                <textarea 
                  value={cueilletteForm.noteCueillette}
                  onChange={(e) => setCueilletteForm({...cueilletteForm, noteCueillette: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm resize-none"
                  rows={3}
                  placeholder="Détails sur le matériel récupéré..."
                />
              </div>
              <div className="flex gap-2 mt-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-yellow-900 rounded-lg text-sm font-medium">
                  <Icon name="camera" size={16}/>Photo AVANT
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-yellow-900 rounded-lg text-sm font-medium">
                  <Icon name="camera" size={16}/>Photo APRÈS
                </button>
              </div>
            </div>

            {/* Signatures */}
            <div className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-3">Signatures</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Signature Chauffeur</label>
                  <div className="h-24 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-white cursor-pointer hover:border-slate-400">
                    <span className="text-sm text-slate-400">Touchez pour signer</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Signature Client</label>
                  <div className="h-24 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-white cursor-pointer hover:border-slate-400">
                    <span className="text-sm text-slate-400">Touchez pour signer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
            <button onClick={() => setShowCueilletteModal(false)} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              Annuler
            </button>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-slate-300 rounded-lg flex items-center gap-2">
                <Icon name="save" size={16}/>Brouillon
              </button>
              <button 
                onClick={() => sauvegarderFormulaire('cueillette')}
                className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-medium rounded-lg flex items-center gap-2"
              >
                <Icon name="check" size={16}/>Confirmer cueillette
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ===== MODAL TRANSPORT =====
  const TransportModal = () => {
    if (!showTransportModal || !selectedIntervention) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] overflow-hidden flex flex-col">
          <div className="p-4 border-b border-slate-200 bg-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Icon name="truck" size={24}/>
                  Feuille de Transport #{selectedIntervention.num}
                </h2>
                <p className="text-sm text-green-100">{selectedIntervention.client}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm bg-green-700 px-3 py-1 rounded">Date: {today}</span>
                <button onClick={() => setShowTransportModal(false)} className="p-2 hover:bg-green-700 rounded-lg">
                  <Icon name="x" size={24}/>
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Trajet */}
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <Icon name="map" size={18}/>
                Informations du trajet
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-xs text-slate-500 mb-1">Adresse de départ</label>
                  <input 
                    type="text"
                    value={transportForm.adresseDepart}
                    onChange={(e) => setTransportForm({...transportForm, adresseDepart: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs text-slate-500 mb-1">Adresse d'arrivée</label>
                  <input 
                    type="text"
                    value={transportForm.adresseArrivee}
                    onChange={(e) => setTransportForm({...transportForm, adresseArrivee: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Heure départ</label>
                  <input 
                    type="time"
                    value={transportForm.heureDepart}
                    onChange={(e) => setTransportForm({...transportForm, heureDepart: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Heure arrivée</label>
                  <input 
                    type="time"
                    value={transportForm.heureArriveeDestination}
                    onChange={(e) => setTransportForm({...transportForm, heureArriveeDestination: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Kilométrage */}
            <div className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-3">Kilométrage</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">KM au départ</label>
                  <input 
                    type="number"
                    value={transportForm.kmDepart}
                    onChange={(e) => setTransportForm({...transportForm, kmDepart: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                    placeholder="Ex: 45230"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">KM à l'arrivée</label>
                  <input 
                    type="number"
                    value={transportForm.kmArrivee}
                    onChange={(e) => setTransportForm({...transportForm, kmArrivee: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                    placeholder="Ex: 45280"
                  />
                </div>
              </div>
              {transportForm.kmDepart && transportForm.kmArrivee && (
                <div className="mt-3 p-3 bg-green-100 rounded-lg">
                  <span className="text-sm text-green-800">
                    Distance parcourue: <strong>{parseInt(transportForm.kmArrivee) - parseInt(transportForm.kmDepart)} km</strong>
                  </span>
                </div>
              )}
            </div>

            {/* Vérifications */}
            <div className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-3">Vérifications</h3>
              <div className="space-y-1">
                <CheckboxGroup 
                  label="Véhicule inspecté (état général)"
                  value={transportForm.vehiculeInspecte}
                  onChange={(v) => setTransportForm({...transportForm, vehiculeInspecte: v})}
                  options={['oui', 'non']}
                />
                <CheckboxGroup 
                  label="Chargement sécurisé"
                  value={transportForm.chargementSecurise}
                  onChange={(v) => setTransportForm({...transportForm, chargementSecurise: v})}
                  options={['oui', 'non', 'na']}
                />
                <CheckboxGroup 
                  label="Documentation complète"
                  value={transportForm.documentationComplete}
                  onChange={(v) => setTransportForm({...transportForm, documentationComplete: v})}
                  options={['oui', 'non']}
                />
              </div>
            </div>

            {/* Contenu du transport */}
            <div className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-3">Contenu du transport</h3>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Membres de l'équipe transportés</label>
                <input 
                  type="text"
                  value={transportForm.membresEquipe.join(', ')}
                  onChange={(e) => setTransportForm({...transportForm, membresEquipe: e.target.value.split(', ')})}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  placeholder="Noms séparés par des virgules"
                />
              </div>
              <div className="mt-3">
                <label className="block text-xs text-slate-500 mb-1">Matériel transporté</label>
                <textarea 
                  value={transportForm.materielTransporte}
                  onChange={(e) => setTransportForm({...transportForm, materielTransporte: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm resize-none"
                  rows={2}
                  placeholder="Liste du matériel..."
                />
              </div>
              <div className="mt-3">
                <label className="block text-xs text-slate-500 mb-1">Notes</label>
                <textarea 
                  value={transportForm.noteTransport}
                  onChange={(e) => setTransportForm({...transportForm, noteTransport: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm resize-none"
                  rows={2}
                  placeholder="Remarques sur le trajet..."
                />
              </div>
            </div>

            {/* Signature */}
            <div className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-3">Signature</h3>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Signature Chauffeur</label>
                <div className="h-24 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-white cursor-pointer hover:border-slate-400">
                  <span className="text-sm text-slate-400">Touchez pour signer</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
            <button onClick={() => setShowTransportModal(false)} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              Annuler
            </button>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-slate-300 rounded-lg flex items-center gap-2">
                <Icon name="save" size={16}/>Brouillon
              </button>
              <button 
                onClick={() => sauvegarderFormulaire('transport')}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg flex items-center gap-2"
              >
                <Icon name="check" size={16}/>Terminer transport
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
      <InspectionModal />
      <LivraisonModal />
      <CueilletteModal />
      <TransportModal />

      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Interventions Terrain</h1>
          <p className="text-slate-500 mt-1">Suivi des interventions et compte-rendus</p>
        </div>
        
        {/* Stats */}
        <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-800">{statsJour.total}</p>
            <p className="text-xs text-slate-500">Total</p>
          </div>
          <div className="w-px h-10 bg-slate-200"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600">{statsJour.installations}</p>
            <p className="text-xs text-slate-500">Install.</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">{statsJour.livraisons}</p>
            <p className="text-xs text-slate-500">Livr.</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">{statsJour.cueillettes}</p>
            <p className="text-xs text-slate-500">Cueil.</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">{statsJour.transports}</p>
            <p className="text-xs text-slate-500">Transp.</p>
          </div>
          <div className="w-px h-10 bg-slate-200"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">{statsJour.heuresTotal}h</p>
            <p className="text-xs text-slate-500">Estimé</p>
          </div>
        </div>
      </div>

      {/* Filtres */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Onglets période */}
        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button 
            onClick={() => setTerrainTab('aujourdhui')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${terrainTab === 'aujourdhui' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}
          >
            Aujourd'hui
          </button>
          <button 
            onClick={() => setTerrainTab('semaine')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${terrainTab === 'semaine' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}
          >
            Cette semaine
          </button>
          <button 
            onClick={() => setTerrainTab('toutes')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${terrainTab === 'toutes' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}
          >
            Toutes
          </button>
        </div>

        {/* Filtre type */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setTerrainFilterType('tous')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium ${terrainFilterType === 'tous' ? 'bg-slate-800 text-white' : 'bg-white border border-slate-200'}`}
          >
            Tous
          </button>
          <button 
            onClick={() => setTerrainFilterType('installation')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 ${terrainFilterType === 'installation' ? 'bg-red-500 text-white' : 'bg-white border border-slate-200 text-red-600'}`}
          >
            <Icon name="wrench" size={14}/>Installation
          </button>
          <button 
            onClick={() => setTerrainFilterType('livraison')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 ${terrainFilterType === 'livraison' ? 'bg-blue-500 text-white' : 'bg-white border border-slate-200 text-blue-600'}`}
          >
            <Icon name="truck" size={14}/>Livraison
          </button>
          <button 
            onClick={() => setTerrainFilterType('cueillette')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 ${terrainFilterType === 'cueillette' ? 'bg-yellow-500 text-yellow-900' : 'bg-white border border-slate-200 text-yellow-600'}`}
          >
            <Icon name="package" size={14}/>Cueillette
          </button>
          <button 
            onClick={() => setTerrainFilterType('transport')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 ${terrainFilterType === 'transport' ? 'bg-green-500 text-white' : 'bg-white border border-slate-200 text-green-600'}`}
          >
            <Icon name="truck" size={14}/>Transport
          </button>
        </div>
      </div>

      {/* Liste des interventions */}
      {interventions.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <Icon name="calendar" size={48} className="mx-auto mb-4 text-slate-300"/>
          <p className="text-slate-500">Aucune intervention prévue pour cette période</p>
        </div>
      ) : (
        <div className="space-y-4">
          {interventions.map(intervention => (
            <div 
              key={intervention.id}
              className={`bg-white rounded-2xl border-l-4 ${getTypeBorderColor(intervention.service)} border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden`}
            >
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  {/* Infos principales */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono font-bold text-xl text-slate-800">{intervention.num}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getTypeBadgeColor(intervention.service)}`}>
                        {intervention.service}
                      </span>
                      {intervention.typeCommande && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">{intervention.typeCommande}</span>
                      )}
                      {intervention.formulaireComplete && (
                        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs flex items-center gap-1">
                          <Icon name="check" size={12}/>Formulaire complété
                        </span>
                      )}
                    </div>
                    
                    <p className="text-lg font-semibold text-slate-800">{intervention.client}</p>
                    <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
                      <Icon name="map" size={14}/>
                      {intervention.adresse}
                    </p>
                    
                    {/* Infos supplémentaires */}
                    <div className="flex items-center gap-6 mt-4 text-sm">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Icon name="calendar" size={16}/>
                        <span>{intervention.datePrevue}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Icon name="clock" size={16}/>
                        <span>{intervention.tempsEstimeInstallation || 1}h estimé</span>
                      </div>
                      {intervention.piedsLineaires > 0 && (
                        <div className="flex items-center gap-2 text-slate-600">
                          <span className="font-semibold">{intervention.piedsLineaires}</span> pi. lin.
                        </div>
                      )}
                      {intervention.equipe && (
                        <div className={`px-2 py-1 rounded text-xs font-semibold text-white ${getEquipeCouleur(intervention.equipe)}`}>
                          {intervention.equipe}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => ouvrirFormulaire(intervention)}
                      className={`px-4 py-2.5 text-white font-medium rounded-xl flex items-center gap-2 ${
                        intervention.service === 'Installation' ? 'bg-red-600 hover:bg-red-700' :
                        intervention.service === 'Livraison' ? 'bg-blue-600 hover:bg-blue-700' :
                        intervention.service === 'Cueillette' ? 'bg-yellow-500 hover:bg-yellow-600 text-yellow-900' :
                        'bg-green-600 hover:bg-green-700'
                      }`}
                    >
                      <Icon name="file" size={18}/>
                      {intervention.service === 'Installation' ? 'Inspection' : 
                       intervention.service === 'Livraison' ? 'Bon livraison' :
                       intervention.service === 'Cueillette' ? 'Bon cueillette' :
                       'Feuille transport'}
                    </button>
                    <button className="px-4 py-2.5 border border-slate-300 hover:bg-slate-50 rounded-xl flex items-center gap-2 text-slate-700">
                      <Icon name="camera" size={18}/>
                      Photos
                    </button>
                    <button className="px-4 py-2.5 border border-slate-300 hover:bg-slate-50 rounded-xl flex items-center gap-2 text-slate-700">
                      <Icon name="map" size={18}/>
                      Navigation
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Barre de statut pour installations */}
              {intervention.service === 'Installation' && (
                <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs">
                    <span className={`px-2 py-1 rounded ${intervention.mesure === '√' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                      Mesure {intervention.mesure === '√' ? '✓' : '—'}
                    </span>
                    <span className={`px-2 py-1 rounded ${intervention.plan === '√' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                      Plan {intervention.plan === '√' ? '✓' : '—'}
                    </span>
                    <span className={`px-2 py-1 rounded ${intervention.productionTerminee === '√' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                      Production {intervention.productionTerminee === '√' ? '✓' : '—'}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500">
                    Couleur: <strong>{intervention.couleur || '—'}</strong>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
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
// === INVENTAIRE COMPLET ===
const Inventaire = () => {
  // États pour les vues
  const [vueActive, setVueActive] = useState('liste'); // liste, entrees-sorties, transactions, pieces, fournisseurs, unites
  
  // États pour les modals
  const [showPiecesModal, setShowPiecesModal] = useState(false);
  const [showFournisseursModal, setShowFournisseursModal] = useState(false);
  const [showUnitesModal, setShowUnitesModal] = useState(false);
  const [showAjouterPieceModal, setShowAjouterPieceModal] = useState(false);
  const [showAjouterFournisseurModal, setShowAjouterFournisseurModal] = useState(false);
  
  // États pour les filtres
  const [recherche, setRecherche] = useState('');
  const [filtreCategorie, setFiltreCategorie] = useState('');
  const [filtreFournisseur, setFiltreFournisseur] = useState('');
  const [filtrePointCommande, setFiltrePointCommande] = useState(false);
  const [recherchePiece, setRecherchePiece] = useState('');
  const [rechercheTransaction, setRechercheTransaction] = useState('');
  const [dateTransaction, setDateTransaction] = useState('');
  
  // État pour les transactions
  const [transaction, setTransaction] = useState({
    codePiece: '',
    type: 'Entrée',
    quantite: 0
  });
  
  // État pour nouvelle pièce
  const [nouvellePiece, setNouvellePiece] = useState({
    code: '',
    description: '',
    couleur: '',
    categorie: '',
    fournisseur: '',
    uniteInventaire: '',
    pointCommande: 0,
    aPeinturer: false
  });
  
  // État pour nouveau fournisseur
  const [nouveauFournisseur, setNouveauFournisseur] = useState({
    nom: '',
    adresse: '',
    codePostal: '',
    ville: '',
    province: '',
    pays: 'Canada',
    telephone: '',
    fax: '',
    contact: '',
    email: ''
  });
  
  // État pour nouvelle unité
  const [nouvelleUnite, setNouvelleUnite] = useState({
    unite: '',
    quantiteParUnite: 1,
    description: ''
  });
  
  // Données des pièces en inventaire
  const [piecesInventaire, setPiecesInventaire] = useState([
    { id: 1, code: 'VI001044', description: 'Douille allongée (vendu en boîte de 10)', couleur: '', categorie: 'Vis', fournisseur: 'Les Attaches Viscan', uniteInventaire: 'Unité', inventaireTotal: 78, partiPeinture: 0, pointCommande: 25, achatFait: false },
    { id: 2, code: 'Polytubing 12"', description: 'Polytubing 12" Clair', couleur: '', categorie: 'Vis', fournisseur: 'Les Emballages E.B. Ltee', uniteInventaire: 'Rouleau', inventaireTotal: 2, partiPeinture: 0, pointCommande: 1, achatFait: false },
    { id: 3, code: '9741068', description: 'Courroie plastique 12mm x 9900\' blanc', couleur: '', categorie: 'Emballage', fournisseur: 'Les Emballages Carrousel', uniteInventaire: 'Rouleau', inventaireTotal: 2, partiPeinture: 0, pointCommande: 1, achatFait: false },
    { id: 4, code: 'Ruban clair 48mm', description: 'Ruban clair 48mm x 132mm (48rlx/boîte)', couleur: '', categorie: 'Emballage', fournisseur: 'Les Emballages Carrousel', uniteInventaire: 'Rouleau', inventaireTotal: 19, partiPeinture: 0, pointCommande: 10, achatFait: false },
    { id: 5, code: 'VS30-1415V', description: 'Vis autopercente #14 x 1 1/2"', couleur: '', categorie: 'Vis', fournisseur: 'Les Attaches Viscan', uniteInventaire: 'Boîte de 1000', inventaireTotal: 1, partiPeinture: 0, pointCommande: 1, achatFait: false },
    { id: 6, code: 'VS27.1423', description: 'Vis #14 x 3"', couleur: '', categorie: 'Vis', fournisseur: 'Les Attaches Viscan', uniteInventaire: 'Boîte de 500', inventaireTotal: 8, partiPeinture: 0, pointCommande: 4, achatFait: false },
    { id: 7, code: '5545903', description: 'Pellicule plastique 3" x 1000\' (18rlx/boîte)', couleur: '', categorie: 'Emballage', fournisseur: 'Les Emballages Carrousel', uniteInventaire: 'Rouleau', inventaireTotal: 6, partiPeinture: 0, pointCommande: 9, achatFait: false },
    { id: 8, code: 'Bec de cane', description: 'Bec de cane', couleur: '', categorie: 'Vis', fournisseur: 'RICHELIEU', uniteInventaire: 'Unité', inventaireTotal: 2, partiPeinture: 0, pointCommande: 5, achatFait: false },
    { id: 9, code: 'VS20.1015CA.V+', description: 'Vis #10 x 1 1/2"', couleur: '', categorie: 'Vis', fournisseur: 'Les Attaches Viscan', uniteInventaire: 'Boîte de 2000', inventaireTotal: 3, partiPeinture: 0, pointCommande: 0, achatFait: false },
    { id: 10, code: 'VS26.1831', description: 'Tire fond HEX SS18,8 1/4 x 5"', couleur: '', categorie: 'Vis', fournisseur: 'Les Attaches Viscan', uniteInventaire: 'Boîte de 250', inventaireTotal: 5, partiPeinture: 0, pointCommande: 0, achatFait: false },
    { id: 11, code: 'OUT-0037', description: 'Spatule de démanchage', couleur: '', categorie: 'Autre', fournisseur: 'Rembourrage d\'auto Daigle inc.', uniteInventaire: 'Unité', inventaireTotal: 0, partiPeinture: 0, pointCommande: 0, achatFait: false },
    { id: 12, code: 'SSGC411XX16S', description: 'Attache vision bas (Stainless)', couleur: '', categorie: 'Vision', fournisseur: 'Euro Architectural Components', uniteInventaire: 'Unité', inventaireTotal: 12, partiPeinture: 0, pointCommande: 0, achatFait: false },
    { id: 13, code: '01-004-BOUT-AR', description: 'Embout de main classique Argile', couleur: 'Argile', categorie: 'Embout', fournisseur: 'Fonderie Fondalco', uniteInventaire: 'Unité', inventaireTotal: 28, partiPeinture: 0, pointCommande: 10, achatFait: false, aPeinturer: true },
    { id: 14, code: '01-004-BOUT-BL', description: 'Embout de main classique Blanc', couleur: 'Blanc', categorie: 'Embout', fournisseur: 'Fonderie Fondalco', uniteInventaire: 'Unité', inventaireTotal: 42, partiPeinture: 0, pointCommande: 20, achatFait: false, aPeinturer: true },
    { id: 15, code: '01-004-BOUT-BR', description: 'Embout de main classique Brun commercial', couleur: 'Brun commercial', categorie: 'Embout', fournisseur: 'Fonderie Fondalco', uniteInventaire: 'Unité', inventaireTotal: 23, partiPeinture: 0, pointCommande: 10, achatFait: false, aPeinturer: true },
    { id: 16, code: '01-004-BOUT-CH', description: 'Embout de main classique Charbon', couleur: 'Charbon', categorie: 'Embout', fournisseur: 'Fonderie Fondalco', uniteInventaire: 'Unité', inventaireTotal: 19, partiPeinture: 0, pointCommande: 10, achatFait: false, aPeinturer: true },
    { id: 17, code: 'BGARD-175VDCNP', description: 'Base 1 3/4" Non peinte', couleur: '', categorie: 'Base', fournisseur: 'Interne', uniteInventaire: 'Unité', inventaireTotal: 561, partiPeinture: 0, pointCommande: 50, achatFait: false },
  ]);
  
  // Données des transactions
  const [transactionsInventaire, setTransactionsInventaire] = useState([
    { id: 1, code: '01-004-BOUT-AR', description: 'Embout de main classique Argile', quantite: 28, type: 'Mise à jour', piecePeinte: false, dateTransaction: '2024-09-19' },
    { id: 2, code: '01-004-BOUT-AR', description: 'Embout de main classique Argile', quantite: 30, type: 'Mise à jour', piecePeinte: false, dateTransaction: '2024-05-21' },
    { id: 3, code: '01-004-BOUT-BL', description: 'Embout de main classique Blanc', quantite: 2, type: 'Sortie', piecePeinte: false, dateTransaction: '2026-01-26' },
    { id: 4, code: '01-004-BOUT-BL', description: 'Embout de main classique Blanc', quantite: 44, type: 'Mise à jour', piecePeinte: false, dateTransaction: '2025-12-08' },
    { id: 5, code: '01-004-BOUT-BL', description: 'Embout de main classique Blanc', quantite: 4, type: 'Sortie', piecePeinte: false, dateTransaction: '2025-12-03' },
    { id: 6, code: '01-004-BOUT-BL', description: 'Embout de main classique Blanc', quantite: 6, type: 'Sortie', piecePeinte: false, dateTransaction: '2025-03-31' },
    { id: 7, code: '01-004-BOUT-BL', description: 'Embout de main classique Blanc', quantite: 2, type: 'Sortie', piecePeinte: false, dateTransaction: '2025-02-10' },
    { id: 8, code: '01-004-BOUT-BL', description: 'Embout de main classique Blanc', quantite: 58, type: 'Entrée', piecePeinte: false, dateTransaction: '2024-12-10' },
    { id: 9, code: '01-004-BOUT-BL', description: 'Embout de main classique Blanc', quantite: 0, type: 'Mise à jour', piecePeinte: false, dateTransaction: '2024-08-30' },
    { id: 10, code: '01-004-BOUT-BL', description: 'Embout de main classique Blanc', quantite: 2, type: 'Sortie', piecePeinte: false, dateTransaction: '2024-07-17' },
  ]);
  
  // Données des fournisseurs
  const [fournisseursList, setFournisseursList] = useState([
    { id: 1, nom: 'Acier Picard', adresse: '3000 rue de l\'Etchemin Lévis', codePostal: 'G6W 7X6', ville: 'Lévis', province: 'QC', pays: 'Canada', telephone: '418-834-8300', fax: '', contact: '', email: '' },
    { id: 2, nom: 'Aiguisage Rousseau', adresse: '1005, av. Bergeron', codePostal: 'G0S 1Z0', ville: 'St-Agapit', province: 'QC', pays: 'Canada', telephone: '418-888-5646', fax: '418-888-4084', contact: '', email: 'info@aiguisage-rousseau.com' },
    { id: 3, nom: 'Aimé Champagne', adresse: '2186, Route Lagueux', codePostal: 'G7A 1A7', ville: 'Lévis', province: 'Québec', pays: 'Canada', telephone: '418-831-9960', fax: '418-831-9358', contact: '', email: '' },
    { id: 4, nom: 'Aluminium PS', adresse: '', codePostal: '', ville: '', province: '', pays: '', telephone: '', fax: '', contact: 'Pierre Denis', email: 'pdenis@psaluminium.com' },
    { id: 5, nom: 'Boulet Lemelin', adresse: '', codePostal: '', ville: '', province: '', pays: '', telephone: '', fax: '', contact: '', email: '' },
    { id: 6, nom: 'Les Attaches Viscan', adresse: '123 Rue Industrielle', codePostal: 'G1K 2L3', ville: 'Québec', province: 'QC', pays: 'Canada', telephone: '418-555-1234', fax: '', contact: 'Marc Simard', email: 'info@viscan.com' },
    { id: 7, nom: 'Les Emballages Carrousel', adresse: '456 Boul. Commerce', codePostal: 'G2J 4R5', ville: 'Québec', province: 'QC', pays: 'Canada', telephone: '418-555-5678', fax: '', contact: '', email: 'ventes@carrousel.com' },
    { id: 8, nom: 'RICHELIEU', adresse: '7900 Henri-Bourassa', codePostal: 'H1E 1P4', ville: 'Montréal', province: 'QC', pays: 'Canada', telephone: '514-555-9999', fax: '', contact: '', email: '' },
    { id: 9, nom: 'Fonderie Fondalco', adresse: '890 Rue Métallurgie', codePostal: 'G3A 2B1', ville: 'Trois-Rivières', province: 'QC', pays: 'Canada', telephone: '819-555-3333', fax: '', contact: 'Jean Laforge', email: 'commandes@fondalco.com' },
    { id: 10, nom: 'Euro Architectural Components', adresse: '', codePostal: '', ville: '', province: '', pays: '', telephone: '', fax: '', contact: '', email: '' },
  ]);
  
  // Données des unités
  const [unitesList, setUnitesList] = useState([
    { id: 1, unite: 'Unité', quantiteParUnite: 1, description: 'Unité' },
    { id: 2, unite: 'Boîte', quantiteParUnite: 1000, description: 'Boîte de 1000' },
    { id: 3, unite: 'Boîte', quantiteParUnite: 100, description: 'Boîte de 100' },
    { id: 4, unite: 'Boîte', quantiteParUnite: 500, description: 'Boîte de 500' },
    { id: 5, unite: 'Paquet', quantiteParUnite: 100, description: 'Paquet de 100' },
    { id: 6, unite: 'Lg 17.48', quantiteParUnite: 1, description: 'Longueur de 17.48 pieds' },
    { id: 7, unite: 'Rouleau', quantiteParUnite: 1, description: 'Rouleau' },
    { id: 8, unite: 'Boîte', quantiteParUnite: 2000, description: 'Boîte de 2000' },
    { id: 9, unite: 'Boîte', quantiteParUnite: 250, description: 'Boîte de 250' },
  ]);
  
  // Catégories disponibles
  const categories = ['Vis', 'Emballage', 'Embout', 'Base', 'Vision', 'Autre'];
  
  // Pièce sélectionnée pour transaction
  const [pieceSelectionnee, setPieceSelectionnee] = useState(null);
  
  // Formater la date
  const formaterDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-CA', { day: 'numeric', month: 'long', year: 'numeric' });
  };
  
  // Filtrer les pièces
  const piecesFiltrees = piecesInventaire.filter(piece => {
    const matchRecherche = !recherche || 
      piece.code.toLowerCase().includes(recherche.toLowerCase()) ||
      piece.description.toLowerCase().includes(recherche.toLowerCase());
    const matchCategorie = !filtreCategorie || piece.categorie === filtreCategorie;
    const matchFournisseur = !filtreFournisseur || piece.fournisseur === filtreFournisseur;
    const matchPointCommande = !filtrePointCommande || (piece.inventaireTotal <= piece.pointCommande && piece.pointCommande > 0);
    return matchRecherche && matchCategorie && matchFournisseur && matchPointCommande;
  });
  
  // Filtrer les transactions
  const transactionsFiltrees = transactionsInventaire.filter(trans => {
    const matchRecherche = !rechercheTransaction || 
      trans.code.toLowerCase().includes(rechercheTransaction.toLowerCase()) ||
      trans.description.toLowerCase().includes(rechercheTransaction.toLowerCase());
    const matchDate = !dateTransaction || trans.dateTransaction >= dateTransaction;
    return matchRecherche && matchDate;
  }).sort((a, b) => new Date(b.dateTransaction) - new Date(a.dateTransaction));
  
  // Couleur de fond selon le niveau de stock
  const getCouleurStock = (inventaire, pointCommande) => {
    if (pointCommande === 0) return 'bg-white';
    if (inventaire <= 0) return 'bg-red-100';
    if (inventaire <= pointCommande) return 'bg-yellow-100';
    return 'bg-green-100';
  };
  
  // Couleur du texte point commande
  const getCouleurPointCommande = (inventaire, pointCommande) => {
    if (pointCommande === 0) return 'text-slate-600';
    if (inventaire <= pointCommande) return 'text-red-600 font-bold';
    return 'text-green-600';
  };
  
  // Enregistrer une transaction
  const enregistrerTransaction = () => {
    if (!pieceSelectionnee || transaction.quantite <= 0) {
      alert('Veuillez sélectionner une pièce et entrer une quantité valide');
      return;
    }
    
    const nouvelleTransaction = {
      id: transactionsInventaire.length + 1,
      code: pieceSelectionnee.code,
      description: pieceSelectionnee.description,
      quantite: transaction.quantite,
      type: transaction.type,
      piecePeinte: false,
      dateTransaction: new Date().toISOString().split('T')[0]
    };
    
    setTransactionsInventaire([nouvelleTransaction, ...transactionsInventaire]);
    
    // Mettre à jour l'inventaire
    setPiecesInventaire(piecesInventaire.map(p => {
      if (p.id === pieceSelectionnee.id) {
        let nouvelInventaire = p.inventaireTotal;
        if (transaction.type === 'Entrée') {
          nouvelInventaire += transaction.quantite;
        } else if (transaction.type === 'Sortie' || transaction.type === 'Sortie-Peinture') {
          nouvelInventaire -= transaction.quantite;
        } else if (transaction.type === 'Mise à jour') {
          nouvelInventaire = transaction.quantite;
        }
        
        // Vérifier si point de commande atteint et envoyer email
        if (nouvelInventaire <= p.pointCommande && p.pointCommande > 0 && !p.achatFait) {
          envoyerAlerteMail(p, nouvelInventaire);
        }
        
        return { ...p, inventaireTotal: Math.max(0, nouvelInventaire) };
      }
      return p;
    }));
    
    setTransaction({ codePiece: '', type: 'Entrée', quantite: 0 });
    setPieceSelectionnee(null);
  };
  
  // Simuler l'envoi d'email d'alerte
  const envoyerAlerteMail = (piece, quantiteActuelle) => {
    console.log(`📧 ALERTE EMAIL: La pièce ${piece.code} (${piece.description}) a atteint son point de commande!`);
    console.log(`   Quantité actuelle: ${quantiteActuelle}, Point de commande: ${piece.pointCommande}`);
    console.log(`   Fournisseur: ${piece.fournisseur}`);
    // TODO: Implémenter l'envoi réel d'email via une API backend
    alert(`📧 Alerte envoyée!\n\nLa pièce "${piece.description}" a atteint son point de commande.\nQuantité: ${quantiteActuelle} / Point commande: ${piece.pointCommande}\nFournisseur: ${piece.fournisseur}`);
  };
  
  // Ajouter une pièce
  const ajouterPiece = () => {
    if (!nouvellePiece.code || !nouvellePiece.description) {
      alert('Veuillez remplir le code et la description');
      return;
    }
    
    const piece = {
      id: piecesInventaire.length + 1,
      ...nouvellePiece,
      inventaireTotal: 0,
      partiPeinture: 0,
      achatFait: false
    };
    
    setPiecesInventaire([...piecesInventaire, piece]);
    setNouvellePiece({
      code: '',
      description: '',
      couleur: '',
      categorie: '',
      fournisseur: '',
      uniteInventaire: '',
      pointCommande: 0,
      aPeinturer: false
    });
    setShowAjouterPieceModal(false);
  };
  
  // Ajouter un fournisseur
  const ajouterFournisseur = () => {
    if (!nouveauFournisseur.nom) {
      alert('Veuillez entrer le nom du fournisseur');
      return;
    }
    
    const fournisseur = {
      id: fournisseursList.length + 1,
      ...nouveauFournisseur
    };
    
    setFournisseursList([...fournisseursList, fournisseur]);
    setNouveauFournisseur({
      nom: '',
      adresse: '',
      codePostal: '',
      ville: '',
      province: '',
      pays: 'Canada',
      telephone: '',
      fax: '',
      contact: '',
      email: ''
    });
    setShowAjouterFournisseurModal(false);
  };
  
  // Ajouter une unité
  const ajouterUnite = () => {
    if (!nouvelleUnite.unite) {
      alert('Veuillez entrer le nom de l\'unité');
      return;
    }
    
    const unite = {
      id: unitesList.length + 1,
      ...nouvelleUnite
    };
    
    setUnitesList([...unitesList, unite]);
    setNouvelleUnite({
      unite: '',
      quantiteParUnite: 1,
      description: ''
    });
  };
  
  // Supprimer une pièce
  const supprimerPiece = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette pièce ?')) {
      setPiecesInventaire(piecesInventaire.filter(p => p.id !== id));
    }
  };
  
  // Supprimer un fournisseur
  const supprimerFournisseur = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce fournisseur ?')) {
      setFournisseursList(fournisseursList.filter(f => f.id !== id));
    }
  };
  
  // Supprimer une unité
  const supprimerUnite = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette unité ?')) {
      setUnitesList(unitesList.filter(u => u.id !== id));
    }
  };

  // === VUE LISTE DES PIÈCES EN INVENTAIRE ===
  const VueListeInventaire = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center text-slate-800 underline">Liste des pièces en inventaire</h2>
      
      {/* Filtres */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 flex flex-wrap items-end gap-4">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm text-slate-600 mb-1">Recherche par code ou description</label>
          <input 
            type="text"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg"
            placeholder="Rechercher..."
          />
        </div>
        
        <div className="flex items-center gap-2">
          <input 
            type="checkbox"
            checked={filtrePointCommande}
            onChange={(e) => setFiltrePointCommande(e.target.checked)}
            className="w-5 h-5"
          />
          <label className="text-sm text-slate-600">Point commande atteint</label>
        </div>
        
        <div>
          <label className="block text-sm text-slate-600 mb-1">Catégorie</label>
          <select 
            value={filtreCategorie}
            onChange={(e) => setFiltreCategorie(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg min-w-[150px]"
          >
            <option value="">Catégories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm text-slate-600 mb-1">Fournisseur</label>
          <select 
            value={filtreFournisseur}
            onChange={(e) => setFiltreFournisseur(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg min-w-[150px]"
          >
            <option value="">Fournisseurs</option>
            {fournisseursList.map(f => (
              <option key={f.id} value={f.nom}>{f.nom}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Tableau */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-sky-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700 underline">Code</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700 underline">Description</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700 underline">Couleur</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700 underline">Catégorie</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700 underline">Fournisseur</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700 underline">Unité inventaire</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700 underline">Inv. total</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700 underline">Parti peinture</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700 underline">Point commande</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700">Achat fait</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {piecesFiltrees.map((piece, index) => (
                <tr key={piece.id} className={`hover:bg-slate-50 ${index % 2 === 0 ? 'bg-sky-50' : 'bg-white'}`}>
                  <td className="px-4 py-3 font-medium text-slate-800">{piece.code}</td>
                  <td className="px-4 py-3 text-slate-600">{piece.description}</td>
                  <td className="px-4 py-3 text-center text-slate-600">{piece.couleur || '-'}</td>
                  <td className="px-4 py-3 text-center text-slate-600">{piece.categorie}</td>
                  <td className="px-4 py-3 text-center text-slate-600 text-xs">{piece.fournisseur}</td>
                  <td className="px-4 py-3 text-center text-slate-600">{piece.uniteInventaire}</td>
                  <td className={`px-4 py-3 text-center font-bold ${getCouleurStock(piece.inventaireTotal, piece.pointCommande)}`}>
                    {piece.inventaireTotal}
                  </td>
                  <td className="px-4 py-3 text-center text-slate-600">{piece.partiPeinture || ''}</td>
                  <td className={`px-4 py-3 text-center ${getCouleurPointCommande(piece.inventaireTotal, piece.pointCommande)} ${getCouleurStock(piece.inventaireTotal, piece.pointCommande)}`}>
                    {piece.pointCommande > 0 ? piece.pointCommande : ''}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <input 
                      type="checkbox"
                      checked={piece.achatFait}
                      onChange={(e) => {
                        setPiecesInventaire(piecesInventaire.map(p => 
                          p.id === piece.id ? { ...p, achatFait: e.target.checked } : p
                        ));
                      }}
                      className="w-4 h-4"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  
  // === VUE ENTRÉES / SORTIES ===
  const VueEntreesSorties = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-slate-800 underline">Entrée / Sortie d'inventaire</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recherche pièce */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Recherche de pièce par code ou description</label>
          <input 
            type="text"
            value={recherchePiece}
            onChange={(e) => setRecherchePiece(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg"
            placeholder="Rechercher une pièce..."
          />
        </div>
        
        {/* Inventaire actuel */}
        {pieceSelectionnee && (
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <h3 className="text-sm font-semibold text-slate-700 mb-2 underline">Inventaire actuel de la pièce</h3>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="bg-slate-100 p-2 rounded">
                <p className="text-xs text-slate-500">Total</p>
                <p className="text-xl font-bold">{pieceSelectionnee.inventaireTotal}</p>
              </div>
              <div className="bg-slate-100 p-2 rounded">
                <p className="text-xs text-slate-500">Magasin</p>
                <p className="text-xl font-bold">{pieceSelectionnee.inventaireTotal}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Formulaire de transaction */}
      <div className="bg-green-100 rounded-xl p-6 border border-green-300">
        <h3 className="text-xl font-bold text-center text-slate-800 mb-6">Ajouter une transaction</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Code de la pièce</label>
            <select 
              value={pieceSelectionnee?.id || ''}
              onChange={(e) => {
                const piece = piecesInventaire.find(p => p.id === parseInt(e.target.value));
                setPieceSelectionnee(piece || null);
              }}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white"
            >
              <option value="">Sélectionner...</option>
              {piecesInventaire
                .filter(p => !recherchePiece || p.code.toLowerCase().includes(recherchePiece.toLowerCase()) || p.description.toLowerCase().includes(recherchePiece.toLowerCase()))
                .map(piece => (
                  <option key={piece.id} value={piece.id}>{piece.code}</option>
                ))
              }
            </select>
            {pieceSelectionnee && (
              <div className="mt-2 p-2 bg-white rounded border text-sm">
                <p className="font-medium">{pieceSelectionnee.description}</p>
                <p className="text-slate-500">{pieceSelectionnee.uniteInventaire}</p>
              </div>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Transaction</label>
            <select 
              value={transaction.type}
              onChange={(e) => setTransaction({...transaction, type: e.target.value})}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white"
            >
              <option value="Entrée">Entrée</option>
              <option value="Sortie">Sortie</option>
              <option value="Sortie-Peinture">Sortie-Peinture</option>
              <option value="Mise à jour">Mise à jour</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Qté Magasin</label>
            <input 
              type="number"
              value={transaction.quantite}
              onChange={(e) => setTransaction({...transaction, quantite: parseInt(e.target.value) || 0})}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg"
              min="0"
            />
          </div>
          
          <button 
            onClick={enregistrerTransaction}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
          >
            Enregistrer {transaction.type}
          </button>
        </div>
      </div>
      
      {/* Section réception commande */}
      <div className="bg-red-100 rounded-xl p-6 border border-red-300">
        <h3 className="text-xl font-bold text-center text-slate-800 mb-4 underline">Réceptionner une commande</h3>
        
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-300">
              <th className="px-4 py-2 text-left font-semibold underline">Code</th>
              <th className="px-4 py-2 text-left font-semibold underline">Description</th>
              <th className="px-4 py-2 text-center font-semibold underline">Qté</th>
              <th className="px-4 py-2 text-center font-semibold underline"># Ordre</th>
              <th className="px-4 py-2 text-center font-semibold underline">Date de départ</th>
            </tr>
          </thead>
          <tbody>
            {/* Les commandes en attente apparaîtraient ici */}
          </tbody>
        </table>
      </div>
    </div>
  );
  
  // === VUE TRANSACTIONS ===
  const VueTransactions = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center text-slate-800 underline">Transaction d'inventaire</h2>
      
      {/* Filtres */}
      <div className="flex flex-wrap items-center gap-4 justify-center">
        <div className="flex items-center gap-2">
          <label className="text-sm text-slate-600">Recherche de pièce:</label>
          <input 
            type="text"
            value={rechercheTransaction}
            onChange={(e) => setRechercheTransaction(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg w-48"
            placeholder="Code ou description"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <label className="text-sm text-slate-600">Date de transaction:</label>
          <input 
            type="date"
            value={dateTransaction}
            onChange={(e) => setDateTransaction(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg"
          />
          <button 
            onClick={() => setDateTransaction('')}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm"
          >
            Enlever la date
          </button>
        </div>
      </div>
      
      {/* Tableau */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-100">
            <tr className="border-b-2 border-blue-400">
              <th className="px-4 py-3 text-left font-semibold text-slate-700 underline">Code</th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700 underline">Description</th>
              <th className="px-4 py-3 text-center font-semibold text-slate-700 underline">Qté</th>
              <th className="px-4 py-3 text-center font-semibold text-slate-700 underline">Type</th>
              <th className="px-4 py-3 text-center font-semibold text-slate-700 underline">Pièce peinte</th>
              <th className="px-4 py-3 text-center font-semibold text-slate-700 underline">Date transaction</th>
              <th className="px-4 py-3 text-center font-semibold text-slate-700 underline">Réception peinture</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {transactionsFiltrees.map((trans, index) => (
              <tr key={trans.id} className={index % 2 === 0 ? 'bg-sky-50' : 'bg-white'}>
                <td className="px-4 py-3 font-medium">{trans.code}</td>
                <td className="px-4 py-3 text-slate-600">{trans.description}</td>
                <td className="px-4 py-3 text-center font-bold">{trans.quantite}</td>
                <td className="px-4 py-3 text-center">{trans.type}</td>
                <td className="px-4 py-3 text-center">{trans.piecePeinte ? 'Oui' : ''}</td>
                <td className="px-4 py-3 text-center">{formaterDate(trans.dateTransaction)}</td>
                <td className="px-4 py-3 text-center">
                  {trans.type === 'Sortie-Peinture' && (
                    <button className="text-blue-600 hover:underline text-sm">Réceptionner</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
  // === MODAL PIÈCES ===
  const PiecesModal = () => {
    if (!showPiecesModal) return null;
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-slate-400 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
          <div className="p-6">
            <h2 className="text-3xl font-bold text-center text-slate-800 underline mb-4">Pièces</h2>
            
            <div className="flex items-center gap-4 mb-4">
              <label className="text-slate-700">Recherche par code:</label>
              <input 
                type="text"
                className="px-4 py-2 border rounded-lg flex-1 max-w-md"
                placeholder="Rechercher..."
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto px-6">
            <table className="w-full text-sm bg-white rounded-lg overflow-hidden">
              <thead className="bg-sky-100 sticky top-0">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-semibold underline">Code<br/>À peinturer<br/>Pièce à peinturer</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold underline">Description<br/>Couleur<br/>Catégorie</th>
                  <th className="px-3 py-2 text-center text-xs font-semibold underline">Fournisseur<br/>Unité inventaire<br/>Prix</th>
                  <th className="px-3 py-2 text-center text-xs font-semibold">Lieu #1<br/>Stock #1</th>
                  <th className="px-3 py-2 text-center text-xs font-semibold">Lieu #2<br/>Stock #2</th>
                  <th className="px-3 py-2 text-center text-xs font-semibold underline">Inventaire total<br/>Transit peinture<br/>Point de commande</th>
                  <th className="px-3 py-2 text-center text-xs font-semibold">Date dernière<br/>transaction</th>
                  <th className="px-3 py-2 text-center text-xs font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {piecesInventaire.filter(p => p.aPeinturer).map(piece => (
                  <tr key={piece.id} className="hover:bg-slate-50">
                    <td className="px-3 py-2">
                      <p className="font-medium">{piece.code}</p>
                      {piece.aPeinturer && (
                        <>
                          <div className="flex items-center gap-1 text-xs">
                            <input type="checkbox" checked readOnly className="w-3 h-3"/>
                            <span>À peinturer</span>
                          </div>
                          <p className="text-xs text-slate-500">{piece.code.replace(/-[A-Z]+$/, '-NP')}</p>
                        </>
                      )}
                    </td>
                    <td className="px-3 py-2">
                      <p>{piece.description}</p>
                      <p className="text-xs text-slate-500">{piece.couleur}</p>
                      <p className="text-xs text-slate-500">{piece.categorie}</p>
                    </td>
                    <td className="px-3 py-2 text-center text-xs">
                      <p>{piece.fournisseur}</p>
                      <p>{piece.uniteInventaire}</p>
                    </td>
                    <td className="px-3 py-2 text-center bg-sky-100">
                      <p className="text-xs text-slate-500">Magasin</p>
                      <p className="font-bold">{piece.inventaireTotal}</p>
                    </td>
                    <td className="px-3 py-2 text-center"></td>
                    <td className={`px-3 py-2 text-center font-bold ${getCouleurStock(piece.inventaireTotal, piece.pointCommande)}`}>
                      {piece.inventaireTotal}
                      <p className="text-xs font-normal">{piece.pointCommande}</p>
                    </td>
                    <td className="px-3 py-2 text-center text-xs"></td>
                    <td className="px-3 py-2">
                      <div className="flex flex-col gap-1">
                        <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded">Modifier</button>
                        <button 
                          onClick={() => supprimerPiece(piece.id)}
                          className="px-3 py-1 bg-blue-500 text-white text-xs rounded"
                        >
                          Supprimer
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 flex justify-center gap-4">
            <button 
              onClick={() => setShowPiecesModal(false)}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
            >
              Quitter
            </button>
            <button 
              onClick={() => {
                setShowPiecesModal(false);
                setShowAjouterPieceModal(true);
              }}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
            >
              Ajouter une pièce
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  // === MODAL FOURNISSEURS ===
  const FournisseursModal = () => {
    if (!showFournisseursModal) return null;
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-slate-400 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
          <div className="p-6">
            <h2 className="text-3xl font-bold text-center text-slate-800 underline mb-4">Fournisseurs</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto px-6">
            <table className="w-full text-sm bg-white rounded-lg overflow-hidden">
              <thead className="bg-sky-100 sticky top-0">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold underline">Fournisseur</th>
                  <th className="px-3 py-2 text-center font-semibold underline">Adresse</th>
                  <th className="px-3 py-2 text-center font-semibold"># Fax</th>
                  <th className="px-3 py-2 text-center font-semibold underline">Contact</th>
                  <th className="px-3 py-2 text-center font-semibold underline">Code Postal</th>
                  <th className="px-3 py-2 text-center font-semibold underline">Ville</th>
                  <th className="px-3 py-2 text-center font-semibold underline">Province</th>
                  <th className="px-3 py-2 text-center font-semibold underline">Pays</th>
                  <th className="px-3 py-2 text-center font-semibold underline"># Téléphone</th>
                  <th className="px-3 py-2 text-center font-semibold underline">Email du contact</th>
                  <th className="px-3 py-2 text-center font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {fournisseursList.map((fournisseur, index) => (
                  <tr key={fournisseur.id} className={index % 2 === 0 ? 'bg-sky-50' : 'bg-white'}>
                    <td className="px-3 py-2 font-bold">{fournisseur.nom}</td>
                    <td className="px-3 py-2 text-center text-xs">{fournisseur.adresse}</td>
                    <td className="px-3 py-2 text-center">{fournisseur.fax}</td>
                    <td className="px-3 py-2 text-center">{fournisseur.contact}</td>
                    <td className="px-3 py-2 text-center">{fournisseur.codePostal}</td>
                    <td className="px-3 py-2 text-center">{fournisseur.ville}</td>
                    <td className="px-3 py-2 text-center">{fournisseur.province}</td>
                    <td className="px-3 py-2 text-center">{fournisseur.pays}</td>
                    <td className="px-3 py-2 text-center">{fournisseur.telephone}</td>
                    <td className="px-3 py-2 text-center text-xs">{fournisseur.email}</td>
                    <td className="px-3 py-2">
                      <div className="flex flex-col gap-1">
                        <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded">Modifier</button>
                        <button 
                          onClick={() => supprimerFournisseur(fournisseur.id)}
                          className="px-3 py-1 bg-blue-500 text-white text-xs rounded"
                        >
                          Supprimer
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 flex justify-center gap-4">
            <button 
              onClick={() => {
                setShowFournisseursModal(false);
                setShowAjouterFournisseurModal(true);
              }}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
            >
              Ajouter un fournisseur
            </button>
            <button 
              onClick={() => setShowFournisseursModal(false)}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
            >
              Quitter
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  // === MODAL UNITÉS ===
  const UnitesModal = () => {
    if (!showUnitesModal) return null;
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-slate-400 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
          <div className="p-6">
            <h2 className="text-3xl font-bold text-center text-slate-800 underline mb-4">Unités</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto px-6">
            <table className="w-full text-sm bg-white rounded-lg overflow-hidden mb-6">
              <thead className="bg-sky-100 sticky top-0">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold underline">Unité</th>
                  <th className="px-4 py-2 text-center font-semibold underline">Qté par unité</th>
                  <th className="px-4 py-2 text-center font-semibold underline">Description</th>
                  <th className="px-4 py-2 text-center font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {unitesList.map(unite => (
                  <tr key={unite.id} className="hover:bg-slate-50">
                    <td className="px-4 py-2">{unite.unite}</td>
                    <td className="px-4 py-2 text-center">{unite.quantiteParUnite}</td>
                    <td className="px-4 py-2 text-center">{unite.description}</td>
                    <td className="px-4 py-2">
                      <div className="flex justify-center gap-2">
                        <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded">Modifier</button>
                        <button 
                          onClick={() => supprimerUnite(unite.id)}
                          className="px-3 py-1 bg-blue-500 text-white text-xs rounded"
                        >
                          Supprimer
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Ajouter une unité */}
            <div className="bg-white rounded-lg p-4 mb-4">
              <h3 className="text-xl font-bold text-center text-slate-800 underline mb-4">Ajouter une unité d'inventaire</h3>
              <div className="grid grid-cols-4 gap-4 items-end">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1 underline">Unité</label>
                  <input 
                    type="text"
                    value={nouvelleUnite.unite}
                    onChange={(e) => setNouvelleUnite({...nouvelleUnite, unite: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1 underline">Quantité par unité</label>
                  <input 
                    type="number"
                    value={nouvelleUnite.quantiteParUnite}
                    onChange={(e) => setNouvelleUnite({...nouvelleUnite, quantiteParUnite: parseInt(e.target.value) || 1})}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1 underline">Description</label>
                  <input 
                    type="text"
                    value={nouvelleUnite.description}
                    onChange={(e) => setNouvelleUnite({...nouvelleUnite, description: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <button 
                  onClick={ajouterUnite}
                  className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
                >
                  Ajouter
                </button>
              </div>
            </div>
          </div>
          
          <div className="p-4 flex justify-center">
            <button 
              onClick={() => setShowUnitesModal(false)}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
            >
              Sortir
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  // === MODAL AJOUTER PIÈCE ===
  const AjouterPieceModal = () => {
    if (!showAjouterPieceModal) return null;
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6">
          <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">Ajouter une pièce</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Code *</label>
              <input 
                type="text"
                value={nouvellePiece.code}
                onChange={(e) => setNouvellePiece({...nouvellePiece, code: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Description *</label>
              <input 
                type="text"
                value={nouvellePiece.description}
                onChange={(e) => setNouvellePiece({...nouvellePiece, description: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Couleur</label>
              <input 
                type="text"
                value={nouvellePiece.couleur}
                onChange={(e) => setNouvellePiece({...nouvellePiece, couleur: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Catégorie</label>
              <select 
                value={nouvellePiece.categorie}
                onChange={(e) => setNouvellePiece({...nouvellePiece, categorie: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">Sélectionner...</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Fournisseur</label>
              <select 
                value={nouvellePiece.fournisseur}
                onChange={(e) => setNouvellePiece({...nouvellePiece, fournisseur: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">Sélectionner...</option>
                {fournisseursList.map(f => (
                  <option key={f.id} value={f.nom}>{f.nom}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Unité inventaire</label>
              <select 
                value={nouvellePiece.uniteInventaire}
                onChange={(e) => setNouvellePiece({...nouvellePiece, uniteInventaire: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">Sélectionner...</option>
                {unitesList.map(u => (
                  <option key={u.id} value={u.description}>{u.description}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Point de commande</label>
              <input 
                type="number"
                value={nouvellePiece.pointCommande}
                onChange={(e) => setNouvellePiece({...nouvellePiece, pointCommande: parseInt(e.target.value) || 0})}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="flex items-center gap-2 pt-6">
              <input 
                type="checkbox"
                checked={nouvellePiece.aPeinturer}
                onChange={(e) => setNouvellePiece({...nouvellePiece, aPeinturer: e.target.checked})}
                className="w-5 h-5"
              />
              <label className="text-sm text-slate-700">À peinturer</label>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={() => setShowAjouterPieceModal(false)}
              className="px-6 py-2 border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              Annuler
            </button>
            <button 
              onClick={ajouterPiece}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  // === MODAL AJOUTER FOURNISSEUR ===
  const AjouterFournisseurModal = () => {
    if (!showAjouterFournisseurModal) return null;
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6">
          <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">Ajouter un fournisseur</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-1">Nom du fournisseur *</label>
              <input 
                type="text"
                value={nouveauFournisseur.nom}
                onChange={(e) => setNouveauFournisseur({...nouveauFournisseur, nom: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-1">Adresse</label>
              <input 
                type="text"
                value={nouveauFournisseur.adresse}
                onChange={(e) => setNouveauFournisseur({...nouveauFournisseur, adresse: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Ville</label>
              <input 
                type="text"
                value={nouveauFournisseur.ville}
                onChange={(e) => setNouveauFournisseur({...nouveauFournisseur, ville: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Province</label>
              <input 
                type="text"
                value={nouveauFournisseur.province}
                onChange={(e) => setNouveauFournisseur({...nouveauFournisseur, province: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Code Postal</label>
              <input 
                type="text"
                value={nouveauFournisseur.codePostal}
                onChange={(e) => setNouveauFournisseur({...nouveauFournisseur, codePostal: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Pays</label>
              <input 
                type="text"
                value={nouveauFournisseur.pays}
                onChange={(e) => setNouveauFournisseur({...nouveauFournisseur, pays: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Téléphone</label>
              <input 
                type="tel"
                value={nouveauFournisseur.telephone}
                onChange={(e) => setNouveauFournisseur({...nouveauFournisseur, telephone: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Fax</label>
              <input 
                type="tel"
                value={nouveauFournisseur.fax}
                onChange={(e) => setNouveauFournisseur({...nouveauFournisseur, fax: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Contact</label>
              <input 
                type="text"
                value={nouveauFournisseur.contact}
                onChange={(e) => setNouveauFournisseur({...nouveauFournisseur, contact: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
              <input 
                type="email"
                value={nouveauFournisseur.email}
                onChange={(e) => setNouveauFournisseur({...nouveauFournisseur, email: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={() => setShowAjouterFournisseurModal(false)}
              className="px-6 py-2 border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              Annuler
            </button>
            <button 
              onClick={ajouterFournisseur}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
    );
  };

  // === RENDU PRINCIPAL ===
  return (
    <div className="space-y-6">
      {/* Modals */}
      <PiecesModal />
      <FournisseursModal />
      <UnitesModal />
      <AjouterPieceModal />
      <AjouterFournisseurModal />

      {/* Header avec navigation */}
      <div className="bg-slate-800 rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 text-white hover:bg-slate-700 rounded-lg">
            <Icon name="chevron-left" size={28}/>
          </button>
          
          {/* Boutons de navigation principale */}
          <div className="flex gap-2">
            <button 
              onClick={() => setVueActive('entrees-sorties')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm ${vueActive === 'entrees-sorties' ? 'bg-blue-500 text-white' : 'bg-blue-400 text-white hover:bg-blue-500'}`}
            >
              Entrées / Sorties
            </button>
            <button 
              onClick={() => setVueActive('transactions')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm ${vueActive === 'transactions' ? 'bg-blue-500 text-white' : 'bg-blue-400 text-white hover:bg-blue-500'}`}
            >
              Afficher les transactions
            </button>
          </div>
          
          <h1 className="text-2xl font-bold text-white ml-4">Inventaire</h1>
        </div>
        
        {/* Boutons de droite */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowPiecesModal(true)}
            className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
          >
            Pièces
          </button>
          <button 
            onClick={() => setShowFournisseursModal(true)}
            className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
          >
            Fournisseurs
          </button>
          <button 
            onClick={() => setShowUnitesModal(true)}
            className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
          >
            Unités
          </button>
        </div>
      </div>

      {/* Contenu selon la vue active */}
      {vueActive === 'liste' && <VueListeInventaire />}
      {vueActive === 'entrees-sorties' && <VueEntreesSorties />}
      {vueActive === 'transactions' && <VueTransactions />}
      
      {/* Vue par défaut - Liste */}
      {vueActive !== 'entrees-sorties' && vueActive !== 'transactions' && <VueListeInventaire />}
    </div>
  );
};

  // === ACHATS ===
 // === ACHATS & DÉLAIS (MISE À JOUR) ===
const Achats = () => {
  const [achatsTab, setAchatsTab] = useState('achats');
  
  // === TYPES D'ACHATS (depuis la création de commande) ===
  const typesAchats = ['Verre', 'Peinture', 'Fibre', 'Limon', 'Colonne', 'Attache', 'Plancher aluminium'];
  
  // === ÉTATS ACHATS ===
  const [filtreClient, setFiltreClient] = useState('');
  const [filtreStatutAchat, setFiltreStatutAchat] = useState('');
  const [filtreTypeCommande, setFiltreTypeCommande] = useState('');
  const [filtreTypeAchat, setFiltreTypeAchat] = useState('');
  const [rechercheAchat, setRechercheAchat] = useState('');
  const [showAjouterAchatModal, setShowAjouterAchatModal] = useState(false);
  const [showModifierAchatModal, setShowModifierAchatModal] = useState(false);
  const [showDetailAchatModal, setShowDetailAchatModal] = useState(false);
  const [achatEnEdition, setAchatEnEdition] = useState(null);
  const [achatSelectionne, setAchatSelectionne] = useState(null);
  const [showConfirmLivraison, setShowConfirmLivraison] = useState(false);
  const [achatAValider, setAchatAValider] = useState(null);
  
  const [achatsData, setAchatsData] = useState([
    { id: 1, numCommande: '250927', client: 'Steve Boucher', ville: 'Beauport', typeCommande: 'Livraison', service: 'Livraison', fournisseur: 'Les Attaches Viscan', datePrevue: '2026-02-22', dateEnvoi: '', achatsTypes: { verre: false, peinture: false, fibre: false, limon: false, colonne: false, attache: false, plancherAlu: false }, achatsStatuts: { verre: '', peinture: '', fibre: '', limon: '', colonne: '', attache: '', plancherAlu: '' }, datesReception: { verre: '', peinture: '', fibre: '', limon: '', colonne: '', attache: '', plancherAlu: '' }, dateCommande: '2026-01-15', montant: 0, statut: 'En attente', notes: 'dossier redonné à Martin le 29-09, possible changements\nmesuré le 18 sept', structure: false, couleur: '', livree: false, dateLivraison: '' },
    { id: 2, numCommande: '251158', client: 'Steve Boucher', ville: 'Beauport', typeCommande: 'Livraison', service: 'Livraison', fournisseur: 'Les Emballages Carrousel', datePrevue: '2026-02-22', dateEnvoi: '', achatsTypes: { verre: false, peinture: false, fibre: false, limon: false, colonne: false, attache: false, plancherAlu: false }, achatsStatuts: { verre: '', peinture: '', fibre: '', limon: '', colonne: '', attache: '', plancherAlu: '' }, datesReception: { verre: '', peinture: '', fibre: '', limon: '', colonne: '', attache: '', plancherAlu: '' }, dateCommande: '2026-01-18', montant: 0, statut: 'En attente', notes: '', structure: false, couleur: '', livree: false, dateLivraison: '' },
    { id: 3, numCommande: '250647', client: 'CONSTRUCTION GOSCO', ville: 'St-Raymond', typeCommande: 'Installation', service: 'Installation', fournisseur: 'Fonderie Fondalco', datePrevue: '2026-03-29', dateEnvoi: '', achatsTypes: { verre: false, peinture: false, fibre: true, limon: true, colonne: false, attache: true, plancherAlu: false }, achatsStatuts: { verre: '', peinture: '', fibre: 'Commandé', limon: 'Commandé', colonne: '', attache: 'Commandé', plancherAlu: '' }, datesReception: { verre: '', peinture: '', fibre: '2026-03-15', limon: '2026-03-20', colonne: '', attache: '2026-03-10', plancherAlu: '' }, dateCommande: '2026-02-01', montant: 3200, statut: 'Commandée', notes: 'attente au printemps', structure: false, couleur: '', livree: false, dateLivraison: '' },
    { id: 4, numCommande: '250683', client: 'Marcel Lebreton', ville: 'Québec', typeCommande: 'Installation', service: 'Installation', fournisseur: 'Euro Architectural Components', datePrevue: '2026-03-29', dateEnvoi: '', achatsTypes: { verre: true, peinture: true, fibre: false, limon: false, colonne: true, attache: false, plancherAlu: false }, achatsStatuts: { verre: 'En transit', peinture: 'Commandé', fibre: '', limon: '', colonne: 'En attente', attache: '', plancherAlu: '' }, datesReception: { verre: '2026-03-10', peinture: '2026-03-12', fibre: '', limon: '', colonne: '2026-03-18', attache: '', plancherAlu: '' }, dateCommande: '2026-01-25', montant: 4800, statut: 'En transit', notes: '', structure: true, couleur: 'Noir', livree: false, dateLivraison: '' },
    { id: 5, numCommande: '250100', client: 'Const. Couture & Tanguay', ville: 'Beauport', typeCommande: 'Installation', service: 'Installation', fournisseur: 'Acier Picard', datePrevue: '2026-04-15', dateEnvoi: '2026-01-20', achatsTypes: { verre: true, peinture: false, fibre: true, limon: false, colonne: false, attache: true, plancherAlu: true }, achatsStatuts: { verre: 'Reçu', peinture: '', fibre: 'Reçu', limon: '', colonne: '', attache: 'Reçu', plancherAlu: 'Commandé' }, datesReception: { verre: '2026-02-28', peinture: '', fibre: '2026-03-01', limon: '', colonne: '', attache: '2026-02-25', plancherAlu: '2026-03-20' }, dateCommande: '2026-01-15', montant: 5500, statut: 'Commandée', notes: 'Client veut attendre', structure: false, couleur: 'Blanc', livree: false, dateLivraison: '' },
    { id: 6, numCommande: '250062-3', client: 'Drolet construction', ville: 'Lévis', typeCommande: 'Installation', service: 'Installation', fournisseur: 'Les Attaches Viscan', datePrevue: '2026-05-01', dateEnvoi: '', achatsTypes: { verre: false, peinture: true, fibre: false, limon: true, colonne: true, attache: false, plancherAlu: false }, achatsStatuts: { verre: '', peinture: 'En attente', fibre: '', limon: 'En attente', colonne: 'En attente', attache: '', plancherAlu: '' }, datesReception: { verre: '', peinture: '', fibre: '', limon: '', colonne: '', attache: '', plancherAlu: '' }, dateCommande: '2026-02-03', montant: 2800, statut: 'En attente', notes: 'Attente couleur', structure: false, couleur: '', livree: false, dateLivraison: '' },
  ]);
  
  // === HISTORIQUE DES ACHATS LIVRÉS ===
  const [historiqueAchats, setHistoriqueAchats] = useState([
    { id: 100, numCommande: '241088', client: 'Les Projets Meraki', ville: 'Québec', typeCommande: 'Installation', service: 'Installation', fournisseur: 'RICHELIEU', datePrevue: '2026-01-10', dateEnvoi: '2025-12-15', achatsTypes: { verre: true, peinture: true, fibre: false, limon: false, colonne: false, attache: true, plancherAlu: false }, achatsStatuts: { verre: 'Reçu', peinture: 'Reçu', fibre: '', limon: '', colonne: '', attache: 'Reçu', plancherAlu: '' }, datesReception: { verre: '2026-01-05', peinture: '2026-01-08', fibre: '', limon: '', colonne: '', attache: '2026-01-03', plancherAlu: '' }, dateCommande: '2025-12-01', montant: 3800, statut: 'Livrée', notes: '', structure: false, couleur: 'Noir', livree: true, dateLivraison: '2026-01-10' },
    { id: 101, numCommande: '250050', client: 'Habitations Lévis', ville: 'Lévis', typeCommande: 'Livraison', service: 'Livraison', fournisseur: 'Aimé Champagne', datePrevue: '2026-01-20', dateEnvoi: '2025-12-20', achatsTypes: { verre: false, peinture: false, fibre: true, limon: true, colonne: false, attache: false, plancherAlu: false }, achatsStatuts: { verre: '', peinture: '', fibre: 'Reçu', limon: 'Reçu', colonne: '', attache: '', plancherAlu: '' }, datesReception: { verre: '', peinture: '', fibre: '2026-01-18', limon: '2026-01-18', colonne: '', attache: '', plancherAlu: '' }, dateCommande: '2025-12-10', montant: 1600, statut: 'Livrée', notes: '', structure: false, couleur: 'Brun', livree: true, dateLivraison: '2026-01-20' },
  ]);
  
  // Formulaire nouvel achat
  const [nouvelAchat, setNouvelAchat] = useState({
    numCommande: '', client: '', ville: '', typeCommande: 'Installation', service: 'Installation', fournisseur: '',
    datePrevue: '', dateEnvoi: '',
    achatsTypes: { verre: false, peinture: false, fibre: false, limon: false, colonne: false, attache: false, plancherAlu: false },
    achatsStatuts: { verre: '', peinture: '', fibre: '', limon: '', colonne: '', attache: '', plancherAlu: '' },
    datesReception: { verre: '', peinture: '', fibre: '', limon: '', colonne: '', attache: '', plancherAlu: '' },
    dateCommande: new Date().toISOString().split('T')[0],
    montant: 0, statut: 'En attente', notes: '', structure: false, couleur: '', livree: false, dateLivraison: ''
  });
  
  // === ÉTATS DÉLAIS ===
  const [showModifierDelaisModal, setShowModifierDelaisModal] = useState(false);
  const [showModifierRupturesModal, setShowModifierRupturesModal] = useState(false);
  const [showConfirmEnvoiDelais, setShowConfirmEnvoiDelais] = useState(false);
  const [delaiEnEdition, setDelaiEnEdition] = useState(null);
  const [ruptureEnEdition, setRuptureEnEdition] = useState(null);
  const [showAjouterRuptureForm, setShowAjouterRuptureForm] = useState(false);
  const [debutConstruction, setDebutConstruction] = useState('2024-07-22');
  
  const [delaisLivraison, setDelaisLivraison] = useState([
    { id: 1, secteur: 'PRODUCTION D\'ALUMINIUM', delaiSemaines: 2 },
    { id: 2, secteur: 'PRODUCTION DU VERRE 5-6mm', delaiSemaines: 3 },
    { id: 3, secteur: 'PRODUCTION DU VERRE 10-12mm', delaiSemaines: 4 },
    { id: 4, secteur: 'PRODUCTION DU FIBRE', delaiSemaines: 3 },
    { id: 5, secteur: 'PRODUCTION DE MARCHES DE FIBRE', delaiSemaines: 3 },
    { id: 6, secteur: 'PRODUCTION DES LIMONS', delaiSemaines: 4 },
    { id: 7, secteur: 'PRODUCTION DES COLONNES', delaiSemaines: 4 },
    { id: 8, secteur: 'INSTALLATION (Barrotins)', delaiSemaines: 3 },
    { id: 9, secteur: 'INSTALLATION (Verres 5-6 mm)', delaiSemaines: 3 },
    { id: 10, secteur: 'Projet d\'INSTALLATION de 6h et plus (vérifier avec planification)', delaiSemaines: 6 },
    { id: 11, secteur: 'INSTALLATION (Verres 10-12 mm)', delaiSemaines: 4 },
  ]);
  
  const [rupturesStock, setRupturesStock] = useState([
    { id: 1, piece: 'Barrotin 3/4"', couleur: 'Noir', dateReception: '2026-02-26' },
    { id: 2, piece: 'Barrotin 1 3/4"', couleur: 'Noir', dateReception: '2026-02-12' },
  ]);
  
  const [nouvelleRupture, setNouvelleRupture] = useState({ piece: '', couleur: '', dateReception: '' });
  
  // === ÉTATS FOURNISSEURS ===
  const [showAjouterFournisseurModal, setShowAjouterFournisseurModal] = useState(false);
  const [showModifierFournisseurModal, setShowModifierFournisseurModal] = useState(false);
  const [fournisseurEnEdition, setFournisseurEnEdition] = useState(null);
  const [rechercheFournisseur, setRechercheFournisseur] = useState('');
  
  const [fournisseursList, setFournisseursList] = useState([
    { id: 1, nom: 'Acier Picard', adresse: '3000 rue de l\'Etchemin Lévis', codePostal: 'G6W 7X6', ville: 'Lévis', province: 'QC', pays: 'Canada', telephone: '418-834-8300', fax: '', contact: '', email: '', transport: '', delaiMoyen: '5 jours' },
    { id: 2, nom: 'Aiguisage Rousseau', adresse: '1005, av. Bergeron', codePostal: 'G0S 1Z0', ville: 'St-Agapit', province: 'QC', pays: 'Canada', telephone: '418-888-5646', fax: '418-888-4084', contact: '', email: 'info@aiguisage-rousseau.com', transport: '', delaiMoyen: '3 jours' },
    { id: 3, nom: 'Aimé Champagne', adresse: '2186, Route Lagueux', codePostal: 'G7A 1A7', ville: 'Lévis', province: 'Québec', pays: 'Canada', telephone: '418-831-9960', fax: '418-831-9358', contact: '', email: '', transport: '', delaiMoyen: '4 jours' },
    { id: 4, nom: 'Aluminium PS', adresse: '', codePostal: '', ville: '', province: '', pays: '', telephone: '', fax: '', contact: 'Pierre Denis', email: 'pdenis@psaluminium.com', transport: '', delaiMoyen: '7 jours' },
    { id: 5, nom: 'Les Attaches Viscan', adresse: '', codePostal: '', ville: 'Québec', province: 'QC', pays: 'Canada', telephone: '418-555-1234', fax: '', contact: 'Marc Simard', email: 'info@viscan.com', transport: '', delaiMoyen: '3 jours' },
    { id: 6, nom: 'Les Emballages Carrousel', adresse: '', codePostal: '', ville: 'Québec', province: 'QC', pays: 'Canada', telephone: '418-555-5678', fax: '', contact: '', email: 'ventes@carrousel.com', transport: '', delaiMoyen: '2 jours' },
    { id: 7, nom: 'RICHELIEU', adresse: '7900 Henri-Bourassa', codePostal: 'H1E 1P4', ville: 'Montréal', province: 'QC', pays: 'Canada', telephone: '514-555-9999', fax: '', contact: '', email: '', transport: '', delaiMoyen: '4 jours' },
    { id: 8, nom: 'Fonderie Fondalco', adresse: '', codePostal: '', ville: 'Trois-Rivières', province: 'QC', pays: 'Canada', telephone: '819-555-3333', fax: '', contact: 'Jean Laforge', email: 'commandes@fondalco.com', transport: '', delaiMoyen: '5 jours' },
    { id: 9, nom: 'Euro Architectural Components', adresse: '', codePostal: '', ville: '', province: '', pays: '', telephone: '', fax: '', contact: '', email: '', transport: '', delaiMoyen: '10 jours' },
  ]);
  
  const [nouveauFournisseur, setNouveauFournisseur] = useState({
    nom: '', adresse: '', codePostal: '', ville: '', province: 'QC', pays: 'Canada', telephone: '', fax: '', contact: '', email: '', transport: '', delaiMoyen: ''
  });
  
  // Types et statuts
  const typesCommande = ['Installation', 'Livraison', 'Cueillette', 'Transport'];
  const statutsAchat = ['En attente', 'Commandée', 'En transit', 'Prête', 'Livrée'];
  const statutsPiece = ['', 'En attente', 'Commandé', 'En transit', 'Reçu'];
  
  // === FONCTIONS UTILITAIRES ===
  const calculerDateLivraison = (semaines) => {
    const d = new Date();
    d.setDate(d.getDate() + semaines * 7);
    return d.toLocaleDateString('fr-CA', { day: 'numeric', month: 'long', year: 'numeric' });
  };
  
  const formaterDate = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('fr-CA', { day: 'numeric', month: 'long', year: 'numeric' });
  };
  
  const getStatutAchatCouleur = (statut) => {
    switch(statut) {
      case 'Livrée': return 'bg-emerald-100 text-emerald-800';
      case 'En transit': return 'bg-blue-100 text-blue-800';
      case 'En attente': return 'bg-amber-100 text-amber-800';
      case 'Commandée': return 'bg-purple-100 text-purple-800';
      case 'Prête': return 'bg-teal-100 text-teal-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };
  
  const getTypeCouleur = (type) => {
    switch(type) {
      case 'Installation': return 'bg-red-500 text-white';
      case 'Livraison': return 'bg-sky-200 text-sky-900';
      case 'Cueillette': return 'bg-yellow-400 text-yellow-900';
      case 'Transport': return 'bg-slate-600 text-white';
      default: return 'bg-slate-400 text-white';
    }
  };
  
  const getStatutPieceCouleur = (statut) => {
    switch(statut) {
      case 'Reçu': return 'bg-emerald-500 text-white';
      case 'En transit': return 'bg-blue-500 text-white';
      case 'Commandé': return 'bg-purple-400 text-white';
      case 'En attente': return 'bg-amber-400 text-white';
      default: return '';
    }
  };
  
  // Icône pour les colonnes d'achat
  const getAchatIcon = (achat, type) => {
    const key = type === 'Plancher aluminium' ? 'plancherAlu' : type.toLowerCase();
    if (!achat.achatsTypes[key]) return null;
    const statut = achat.achatsStatuts[key];
    if (statut === 'Reçu') return <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500 text-white text-xs font-bold">✓</span>;
    if (statut === 'En transit') return <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-500 text-white text-xs font-bold">⇄</span>;
    if (statut === 'Commandé') return <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-purple-400 text-white text-xs font-bold">①</span>;
    if (statut === 'En attente') return <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-400 text-white text-xs font-bold">⏳</span>;
    return <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-200 text-slate-600 text-xs font-bold">●</span>;
  };
  
  // Compter les achats actifs par type
  const compterAchatsType = (type) => {
    const key = type === 'Plancher aluminium' ? 'plancherAlu' : type.toLowerCase();
    return achatsData.filter(a => a.achatsTypes[key]).length;
  };
  
  // Filtrer les achats actifs (non livrés)
  const achatsFiltres = achatsData.filter(achat => {
    const matchRecherche = !rechercheAchat || 
      achat.numCommande.toLowerCase().includes(rechercheAchat.toLowerCase()) ||
      achat.client.toLowerCase().includes(rechercheAchat.toLowerCase()) ||
      achat.fournisseur.toLowerCase().includes(rechercheAchat.toLowerCase());
    const matchClient = !filtreClient || achat.client === filtreClient;
    const matchStatut = !filtreStatutAchat || achat.statut === filtreStatutAchat;
    const matchType = !filtreTypeCommande || achat.typeCommande === filtreTypeCommande;
    const matchTypeAchat = !filtreTypeAchat || achat.achatsTypes[filtreTypeAchat === 'Plancher aluminium' ? 'plancherAlu' : filtreTypeAchat.toLowerCase()];
    return matchRecherche && matchClient && matchStatut && matchType && matchTypeAchat;
  });
  
  const clientsUniques = [...new Set(achatsData.map(a => a.client))].sort();
  
  const statsAchats = {
    total: achatsData.length,
    enAttente: achatsData.filter(a => a.statut === 'En attente').length,
    commandees: achatsData.filter(a => a.statut === 'Commandée').length,
    enTransit: achatsData.filter(a => a.statut === 'En transit').length,
    montantTotal: achatsData.reduce((sum, a) => sum + a.montant, 0),
  };
  
  // === CRUD ACHATS ===
  const ajouterAchat = () => {
    if (!nouvelAchat.numCommande || !nouvelAchat.client) { alert('# Commande et Client requis'); return; }
    setAchatsData([...achatsData, { id: Date.now(), ...nouvelAchat }]);
    setNouvelAchat({
      numCommande: '', client: '', ville: '', typeCommande: 'Installation', service: 'Installation', fournisseur: '',
      datePrevue: '', dateEnvoi: '',
      achatsTypes: { verre: false, peinture: false, fibre: false, limon: false, colonne: false, attache: false, plancherAlu: false },
      achatsStatuts: { verre: '', peinture: '', fibre: '', limon: '', colonne: '', attache: '', plancherAlu: '' },
      datesReception: { verre: '', peinture: '', fibre: '', limon: '', colonne: '', attache: '', plancherAlu: '' },
      dateCommande: new Date().toISOString().split('T')[0], montant: 0, statut: 'En attente', notes: '', structure: false, couleur: '', livree: false, dateLivraison: ''
    });
    setShowAjouterAchatModal(false);
  };
  
  const modifierAchat = () => {
    if (!achatEnEdition) return;
    setAchatsData(achatsData.map(a => a.id === achatEnEdition.id ? achatEnEdition : a));
    setShowModifierAchatModal(false);
    setAchatEnEdition(null);
  };
  
  const supprimerAchat = (id) => {
    if (window.confirm('Supprimer cet achat ?')) {
      setAchatsData(achatsData.filter(a => a.id !== id));
    }
  };
  
  // === VALIDER LIVRAISON ===
  const validerLivraison = (achat) => {
    const achatLivre = { 
      ...achat, 
      statut: 'Livrée', 
      livree: true, 
      dateLivraison: new Date().toISOString().split('T')[0] 
    };
    // Retirer du menu principal
    setAchatsData(achatsData.filter(a => a.id !== achat.id));
    // Ajouter à l'historique
    setHistoriqueAchats([achatLivre, ...historiqueAchats]);
    setShowConfirmLivraison(false);
    setAchatAValider(null);
    setShowDetailAchatModal(false);
  };
  
  // === CRUD FOURNISSEURS ===
  const ajouterFournisseur = () => {
    if (!nouveauFournisseur.nom) { alert('Nom requis'); return; }
    setFournisseursList([...fournisseursList, { id: Date.now(), ...nouveauFournisseur }]);
    setNouveauFournisseur({ nom: '', adresse: '', codePostal: '', ville: '', province: 'QC', pays: 'Canada', telephone: '', fax: '', contact: '', email: '', transport: '', delaiMoyen: '' });
    setShowAjouterFournisseurModal(false);
  };
  
  const modifierFournisseur = () => {
    if (!fournisseurEnEdition) return;
    setFournisseursList(fournisseursList.map(f => f.id === fournisseurEnEdition.id ? fournisseurEnEdition : f));
    setShowModifierFournisseurModal(false);
    setFournisseurEnEdition(null);
  };
  
  const supprimerFournisseur = (id) => {
    if (window.confirm('Supprimer ce fournisseur ?')) {
      setFournisseursList(fournisseursList.filter(f => f.id !== id));
    }
  };
  
  // === DÉLAIS ===
  const modifierDelai = (id, val) => {
    setDelaisLivraison(delaisLivraison.map(d => d.id === id ? { ...d, delaiSemaines: parseInt(val) || 0 } : d));
    setDelaiEnEdition(null);
  };
  
  const ajouterRupture = () => {
    if (!nouvelleRupture.piece) { alert('Pièce requise'); return; }
    setRupturesStock([...rupturesStock, { id: Date.now(), ...nouvelleRupture }]);
    setNouvelleRupture({ piece: '', couleur: '', dateReception: '' });
    setShowAjouterRuptureForm(false);
  };
  
  const supprimerRupture = (id) => {
    if (window.confirm('Supprimer ?')) setRupturesStock(rupturesStock.filter(r => r.id !== id));
  };
  
  const envoyerDelaisParCourriel = () => {
    alert('✅ Liste des délais envoyée par courriel!');
    setShowConfirmEnvoiDelais(false);
  };

  // =============================================
  // MODAL DÉTAIL ACHAT
  // =============================================
  const DetailAchatModal = () => {
    if (!showDetailAchatModal || !achatSelectionne) return null;
    const a = achatSelectionne;
    const isHistorique = a.livree;
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="p-5 bg-slate-800 text-white flex items-center justify-between rounded-t-2xl">
            <div>
              <h2 className="text-xl font-bold">Détail de l'achat - Commande #{a.numCommande}</h2>
              <p className="text-slate-300">{a.client} • {a.ville}</p>
            </div>
            <button onClick={() => setShowDetailAchatModal(false)} className="p-2 hover:bg-slate-700 rounded-lg">
              <Icon name="x" size={24}/>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {/* Infos principales */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-50 rounded-xl p-3">
                <p className="text-xs text-slate-500">Service</p>
                <span className={`px-2 py-1 rounded text-xs font-bold ${getTypeCouleur(a.service)}`}>{a.service}</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-3">
                <p className="text-xs text-slate-500">Date prévue</p>
                <p className="font-semibold">{a.datePrevue}</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-3">
                <p className="text-xs text-slate-500">Statut</p>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatutAchatCouleur(a.statut)}`}>{a.statut}</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-3">
                <p className="text-xs text-slate-500">Montant</p>
                <p className="font-bold text-lg">{a.montant > 0 ? `${a.montant.toLocaleString()} $` : '-'}</p>
              </div>
            </div>
            
            {a.couleur && (
              <div className="bg-slate-50 rounded-xl p-3 inline-block">
                <p className="text-xs text-slate-500">Couleur</p>
                <p className="font-semibold">{a.couleur}</p>
              </div>
            )}
            {a.structure && (
              <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Structure: Oui</span>
            )}
            
            {/* Détail des achats par type */}
            <div>
              <h3 className="font-bold text-slate-800 mb-3 text-lg">Détail des achats par type</h3>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Type d'achat</th>
                      <th className="px-4 py-3 text-center font-semibold">Requis</th>
                      <th className="px-4 py-3 text-center font-semibold">Statut</th>
                      <th className="px-4 py-3 text-center font-semibold">Date de réception</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { label: 'Verre', key: 'verre' },
                      { label: 'Peinture', key: 'peinture' },
                      { label: 'Fibre', key: 'fibre' },
                      { label: 'Limon', key: 'limon' },
                      { label: 'Colonne', key: 'colonne' },
                      { label: 'Attache', key: 'attache' },
                      { label: 'Plancher aluminium', key: 'plancherAlu' },
                    ].map(type => (
                      <tr key={type.key} className={a.achatsTypes[type.key] ? 'bg-white' : 'bg-slate-50 opacity-50'}>
                        <td className="px-4 py-3 font-medium">{type.label}</td>
                        <td className="px-4 py-3 text-center">
                          {a.achatsTypes[type.key] 
                            ? <span className="text-emerald-600 font-bold">✓ Oui</span>
                            : <span className="text-slate-400">—</span>
                          }
                        </td>
                        <td className="px-4 py-3 text-center">
                          {a.achatsTypes[type.key] && a.achatsStatuts[type.key] 
                            ? <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatutPieceCouleur(a.achatsStatuts[type.key])}`}>{a.achatsStatuts[type.key]}</span>
                            : a.achatsTypes[type.key] ? <span className="text-slate-400">Non défini</span> : '—'
                          }
                        </td>
                        <td className="px-4 py-3 text-center">
                          {a.achatsTypes[type.key] && a.datesReception[type.key] 
                            ? formaterDate(a.datesReception[type.key])
                            : a.achatsTypes[type.key] ? <span className="text-slate-400">En attente</span> : '—'
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Notes */}
            {a.notes && (
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-1">Notes</h4>
                <p className="text-sm text-slate-700 whitespace-pre-line">{a.notes}</p>
              </div>
            )}
            
            {/* Info livraison (pour historique) */}
            {a.livree && (
              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                <h4 className="font-semibold text-emerald-800 mb-1">✓ Livraison validée</h4>
                <p className="text-sm text-slate-700">Date de livraison: <strong>{formaterDate(a.dateLivraison)}</strong></p>
              </div>
            )}
          </div>
          
          {/* Footer */}
          <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
            <div>
              {!isHistorique && (
                <button 
                  onClick={() => { setAchatAValider(a); setShowConfirmLivraison(true); }}
                  className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg flex items-center gap-2"
                >
                  <Icon name="check" size={18}/>
                  Valider la livraison
                </button>
              )}
            </div>
            <div className="flex gap-2">
              {!isHistorique && (
                <button 
                  onClick={() => { setAchatEnEdition({...a}); setShowDetailAchatModal(false); setShowModifierAchatModal(true); }}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-2"
                >
                  <Icon name="edit" size={16}/>Modifier
                </button>
              )}
              <button onClick={() => setShowDetailAchatModal(false)} className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100">
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // =============================================
  // MODAL CONFIRMATION LIVRAISON
  // =============================================
  const ConfirmLivraisonModal = () => {
    if (!showConfirmLivraison || !achatAValider) return null;
    
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[60] p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="check" size={32} className="text-emerald-600"/>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Valider la livraison ?</h3>
          <p className="text-slate-600 mb-2">Commande <strong>#{achatAValider.numCommande}</strong> - {achatAValider.client}</p>
          <p className="text-sm text-slate-500 mb-6">L'achat sera déplacé dans l'historique des achats livrés.</p>
          <div className="flex justify-center gap-4">
            <button onClick={() => { setShowConfirmLivraison(false); setAchatAValider(null); }} className="px-6 py-2 border border-slate-300 rounded-lg hover:bg-slate-50">
              Annuler
            </button>
            <button onClick={() => validerLivraison(achatAValider)} className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg">
              ✓ Confirmer la livraison
            </button>
          </div>
        </div>
      </div>
    );
  };

  // =============================================
  // MODAL FORMULAIRE ACHAT (AJOUT / MODIF)
  // =============================================
  const AchatFormModal = ({ show, onClose, achat, setAchat, onSave, titre }) => {
    if (!show || !achat) return null;
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          <div className="p-5 bg-slate-800 text-white rounded-t-2xl">
            <h2 className="text-xl font-bold">{titre}</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Infos principales */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1"># Commande *</label>
                <input type="text" value={achat.numCommande} onChange={(e) => setAchat({...achat, numCommande: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Client *</label>
                <input type="text" value={achat.client} onChange={(e) => setAchat({...achat, client: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Ville</label>
                <input type="text" value={achat.ville} onChange={(e) => setAchat({...achat, ville: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Service</label>
                <select value={achat.typeCommande} onChange={(e) => setAchat({...achat, typeCommande: e.target.value, service: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg">
                  {typesCommande.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Date prévue</label>
                <input type="date" value={achat.datePrevue} onChange={(e) => setAchat({...achat, datePrevue: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Montant ($)</label>
                <input type="number" step="0.01" value={achat.montant} onChange={(e) => setAchat({...achat, montant: parseFloat(e.target.value) || 0})} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
              </div>
            </div>
            
            {/* Section Types d'achats */}
            <div>
              <h3 className="font-bold text-slate-800 mb-3 text-lg border-b pb-2">Types d'achats requis</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Achat de fibre', key: 'fibre', dateLabel: 'Date de réception du fibre' },
                  { label: 'Achat de limons', key: 'limon', dateLabel: 'Date de réception des limons' },
                  { label: 'Achat de verres', key: 'verre', dateLabel: 'Date de réception du verre' },
                  { label: 'Achat de colonnes', key: 'colonne', dateLabel: 'Date de réception des colonnes' },
                  { label: 'Achat de peinture', key: 'peinture', dateLabel: 'Date de réception de la peinture' },
                  { label: 'Achat d\'attaches', key: 'attache', dateLabel: 'Date de réception des attaches' },
                  { label: 'Achat plancher alu.', key: 'plancherAlu', dateLabel: 'Date de réception plancher' },
                ].map(type => (
                  <div key={type.key} className={`p-3 rounded-xl border-2 ${achat.achatsTypes[type.key] ? 'border-blue-400 bg-blue-50' : 'border-slate-200 bg-white'}`}>
                    <label className="flex items-center gap-2 cursor-pointer mb-2">
                      <input 
                        type="checkbox" 
                        checked={achat.achatsTypes[type.key]} 
                        onChange={(e) => setAchat({
                          ...achat, 
                          achatsTypes: {...achat.achatsTypes, [type.key]: e.target.checked}
                        })}
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-semibold text-slate-700">{type.label}</span>
                    </label>
                    
                    {achat.achatsTypes[type.key] && (
                      <div className="space-y-2">
                        <select 
                          value={achat.achatsStatuts[type.key]} 
                          onChange={(e) => setAchat({
                            ...achat, 
                            achatsStatuts: {...achat.achatsStatuts, [type.key]: e.target.value}
                          })}
                          className="w-full px-2 py-1 border rounded text-xs"
                        >
                          {statutsPiece.map(s => <option key={s} value={s}>{s || 'Statut...'}</option>)}
                        </select>
                        <div>
                          <label className="text-xs text-slate-500">{type.dateLabel}</label>
                          <input 
                            type="date" 
                            value={achat.datesReception[type.key]} 
                            onChange={(e) => setAchat({
                              ...achat, 
                              datesReception: {...achat.datesReception, [type.key]: e.target.value}
                            })}
                            className="w-full px-2 py-1 border rounded text-xs"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Structure toggle */}
                <div className="p-3 rounded-xl border-2 border-slate-200 bg-white">
                  <label className="text-sm font-semibold text-slate-700 mb-2 block">Structure</label>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setAchat({...achat, structure: !achat.structure})}
                      className={`relative w-12 h-6 rounded-full transition-colors ${achat.structure ? 'bg-blue-500' : 'bg-slate-300'}`}
                    >
                      <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${achat.structure ? 'left-6' : 'left-0.5'}`}/>
                    </button>
                    <span className="text-sm">{achat.structure ? 'Oui' : 'Non'}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Couleur et notes */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Couleur</label>
                <input type="text" value={achat.couleur} onChange={(e) => setAchat({...achat, couleur: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Statut global</label>
                <select value={achat.statut} onChange={(e) => setAchat({...achat, statut: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg">
                  {statutsAchat.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-1">Notes</label>
                <textarea value={achat.notes} onChange={(e) => setAchat({...achat, notes: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg" rows={2}/>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-slate-200 flex justify-end gap-3">
            <button onClick={onClose} className="px-6 py-2 border border-slate-300 rounded-lg hover:bg-slate-50">Annuler</button>
            <button onClick={onSave} className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg">Enregistrer</button>
          </div>
        </div>
      </div>
    );
  };

  // =============================================
  // MODAL FOURNISSEUR
  // =============================================
  const FournisseurFormModal = ({ show, onClose, fournisseur, setFournisseur, onSave, titre }) => {
    if (!show || !fournisseur) return null;
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="p-5 bg-slate-800 text-white rounded-t-2xl"><h2 className="text-xl font-bold">{titre}</h2></div>
          <div className="p-6 grid grid-cols-2 gap-4">
            <div className="col-span-2"><label className="block text-sm font-semibold mb-1">Nom *</label><input type="text" value={fournisseur.nom} onChange={(e) => setFournisseur({...fournisseur, nom: e.target.value})} className="w-full px-3 py-2 border rounded-lg"/></div>
            <div className="col-span-2"><label className="block text-sm font-semibold mb-1">Adresse</label><input type="text" value={fournisseur.adresse} onChange={(e) => setFournisseur({...fournisseur, adresse: e.target.value})} className="w-full px-3 py-2 border rounded-lg"/></div>
            <div><label className="block text-sm font-semibold mb-1">Ville</label><input type="text" value={fournisseur.ville} onChange={(e) => setFournisseur({...fournisseur, ville: e.target.value})} className="w-full px-3 py-2 border rounded-lg"/></div>
            <div><label className="block text-sm font-semibold mb-1">Province</label><input type="text" value={fournisseur.province} onChange={(e) => setFournisseur({...fournisseur, province: e.target.value})} className="w-full px-3 py-2 border rounded-lg"/></div>
            <div><label className="block text-sm font-semibold mb-1">Code Postal</label><input type="text" value={fournisseur.codePostal} onChange={(e) => setFournisseur({...fournisseur, codePostal: e.target.value})} className="w-full px-3 py-2 border rounded-lg"/></div>
            <div><label className="block text-sm font-semibold mb-1">Pays</label><input type="text" value={fournisseur.pays} onChange={(e) => setFournisseur({...fournisseur, pays: e.target.value})} className="w-full px-3 py-2 border rounded-lg"/></div>
            <div><label className="block text-sm font-semibold mb-1">Téléphone</label><input type="tel" value={fournisseur.telephone} onChange={(e) => setFournisseur({...fournisseur, telephone: e.target.value})} className="w-full px-3 py-2 border rounded-lg"/></div>
            <div><label className="block text-sm font-semibold mb-1">Fax</label><input type="tel" value={fournisseur.fax} onChange={(e) => setFournisseur({...fournisseur, fax: e.target.value})} className="w-full px-3 py-2 border rounded-lg"/></div>
            <div><label className="block text-sm font-semibold mb-1">Contact</label><input type="text" value={fournisseur.contact} onChange={(e) => setFournisseur({...fournisseur, contact: e.target.value})} className="w-full px-3 py-2 border rounded-lg"/></div>
            <div><label className="block text-sm font-semibold mb-1">Email</label><input type="email" value={fournisseur.email} onChange={(e) => setFournisseur({...fournisseur, email: e.target.value})} className="w-full px-3 py-2 border rounded-lg"/></div>
            <div><label className="block text-sm font-semibold mb-1">Transport</label><input type="text" value={fournisseur.transport} onChange={(e) => setFournisseur({...fournisseur, transport: e.target.value})} className="w-full px-3 py-2 border rounded-lg"/></div>
            <div><label className="block text-sm font-semibold mb-1">Délai moyen</label><input type="text" value={fournisseur.delaiMoyen} onChange={(e) => setFournisseur({...fournisseur, delaiMoyen: e.target.value})} className="w-full px-3 py-2 border rounded-lg" placeholder="ex: 5 jours"/></div>
          </div>
          <div className="p-4 border-t flex justify-end gap-3">
            <button onClick={onClose} className="px-6 py-2 border rounded-lg hover:bg-slate-50">Annuler</button>
            <button onClick={onSave} className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg">Enregistrer</button>
          </div>
        </div>
      </div>
    );
  };

  // =============================================
  // MODALS DÉLAIS
  // =============================================
  const ModifierDelaisModal = () => {
    if (!showModifierDelaisModal) return null;
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-slate-300 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
          <div className="p-6">
            <h2 className="text-3xl font-bold text-center text-blue-600 underline mb-6">Modification des délais</h2>
            <div className="bg-white rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-200">
                  <tr>
                    <th className="px-4 py-3 text-center text-blue-600">Secteur</th>
                    <th className="px-4 py-3 text-center text-blue-600">Nombre de semaines</th>
                    <th className="px-4 py-3 w-16"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {delaisLivraison.map((d, i) => (
                    <tr key={d.id} className={i % 2 === 0 ? 'bg-slate-100' : 'bg-white'}>
                      <td className="px-4 py-3 font-semibold text-center">{d.secteur}</td>
                      <td className="px-4 py-3 text-center">
                        {delaiEnEdition === d.id ? (
                          <input type="number" defaultValue={d.delaiSemaines} min="0" className="w-20 px-2 py-1 border rounded text-center" autoFocus
                            onBlur={(e) => modifierDelai(d.id, e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter') modifierDelai(d.id, e.target.value); }}
                          />
                        ) : <span className="text-xl font-bold">{d.delaiSemaines}</span>}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button onClick={() => setDelaiEnEdition(d.id)} className="text-blue-500 hover:text-blue-700"><Icon name="edit" size={20}/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="p-4 flex justify-center">
            <button onClick={() => { setShowModifierDelaisModal(false); setDelaiEnEdition(null); }} className="px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold rounded-lg">Sortir</button>
          </div>
        </div>
      </div>
    );
  };

  const ModifierRupturesModal = () => {
    if (!showModifierRupturesModal) return null;
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-slate-300 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
          <div className="p-6">
            <h2 className="text-3xl font-bold text-center text-blue-600 underline mb-6">Modification des ruptures de stock</h2>
            <div className="bg-white rounded-lg overflow-hidden mb-4">
              <table className="w-full text-sm">
                <thead className="bg-slate-200">
                  <tr>
                    <th className="px-4 py-3 text-center text-blue-600">Pièces</th>
                    <th className="px-4 py-3 text-center text-blue-600">Couleur</th>
                    <th className="px-4 py-3 text-center text-blue-600">Date de réception</th>
                    <th className="px-4 py-3 w-24"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {rupturesStock.map(r => (
                    <tr key={r.id}>
                      <td className="px-4 py-3">{ruptureEnEdition === r.id ? <input type="text" defaultValue={r.piece} className="w-full px-2 py-1 border rounded" onBlur={(e) => setRupturesStock(rupturesStock.map(x => x.id === r.id ? {...x, piece: e.target.value} : x))}/> : r.piece}</td>
                      <td className="px-4 py-3 text-center">{ruptureEnEdition === r.id ? <input type="text" defaultValue={r.couleur} className="w-full px-2 py-1 border rounded" onBlur={(e) => setRupturesStock(rupturesStock.map(x => x.id === r.id ? {...x, couleur: e.target.value} : x))}/> : r.couleur}</td>
                      <td className="px-4 py-3 text-center">{ruptureEnEdition === r.id ? <input type="date" defaultValue={r.dateReception} className="px-2 py-1 border rounded" onBlur={(e) => setRupturesStock(rupturesStock.map(x => x.id === r.id ? {...x, dateReception: e.target.value} : x))}/> : formaterDate(r.dateReception)}</td>
                      <td className="px-4 py-3 text-center flex gap-1 justify-center">
                        <button onClick={() => setRuptureEnEdition(ruptureEnEdition === r.id ? null : r.id)} className="text-blue-500"><Icon name="edit" size={18}/></button>
                        <button onClick={() => supprimerRupture(r.id)} className="text-red-500"><Icon name="trash" size={18}/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {showAjouterRuptureForm && (
              <div className="bg-white rounded-lg p-4 mb-4 border-2 border-blue-300">
                <div className="grid grid-cols-3 gap-3">
                  <input type="text" placeholder="Pièce" value={nouvelleRupture.piece} onChange={(e) => setNouvelleRupture({...nouvelleRupture, piece: e.target.value})} className="px-3 py-2 border rounded-lg"/>
                  <input type="text" placeholder="Couleur" value={nouvelleRupture.couleur} onChange={(e) => setNouvelleRupture({...nouvelleRupture, couleur: e.target.value})} className="px-3 py-2 border rounded-lg"/>
                  <input type="date" value={nouvelleRupture.dateReception} onChange={(e) => setNouvelleRupture({...nouvelleRupture, dateReception: e.target.value})} className="px-3 py-2 border rounded-lg"/>
                </div>
                <div className="mt-3 flex gap-2"><button onClick={ajouterRupture} className="px-4 py-2 bg-emerald-500 text-white rounded-lg">Ajouter</button><button onClick={() => setShowAjouterRuptureForm(false)} className="px-4 py-2 border rounded-lg">Annuler</button></div>
              </div>
            )}
          </div>
          <div className="p-4 flex justify-center gap-4">
            <button onClick={() => { setShowModifierRupturesModal(false); setRuptureEnEdition(null); }} className="px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold rounded-lg">Sortir</button>
            <button onClick={() => setShowAjouterRuptureForm(true)} className="px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold rounded-lg">Ajouter Rupture</button>
          </div>
        </div>
      </div>
    );
  };

  const ConfirmEnvoiDelaisModal = () => {
    if (!showConfirmEnvoiDelais) return null;
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-slate-300 rounded-2xl shadow-2xl w-full max-w-md p-8 text-center">
          <p className="text-lg font-bold text-slate-800 mb-6">Confirmer l'envoi de la liste des délais</p>
          <div className="flex justify-center gap-6">
            <button onClick={envoyerDelaisParCourriel} className="px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg text-lg">Confirmer</button>
            <button onClick={() => setShowConfirmEnvoiDelais(false)} className="px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg text-lg">Annuler</button>
          </div>
        </div>
      </div>
    );
  };

  // =============================================
  // TABLEAU D'ACHATS COMMUN (utilisé pour actifs et historique)
  // =============================================
  const TableauAchats = ({ data, isHistorique }) => (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="px-3 py-3 text-left"># Projet</th>
              <th className="px-3 py-3 text-left">Client<br/><span className="font-normal text-xs text-slate-300">Service / Ville</span></th>
              <th className="px-3 py-3 text-center">Date prévue</th>
              <th className="px-2 py-3 text-center text-xs">Verre</th>
              <th className="px-2 py-3 text-center text-xs">Peinture</th>
              <th className="px-2 py-3 text-center text-xs">Fibre</th>
              <th className="px-2 py-3 text-center text-xs">Limon</th>
              <th className="px-2 py-3 text-center text-xs">Colonne</th>
              <th className="px-2 py-3 text-center text-xs">Attache</th>
              <th className="px-3 py-3 text-center">Statut</th>
              {isHistorique && <th className="px-3 py-3 text-center">Date livraison</th>}
              {!isHistorique && <th className="px-3 py-3 text-center">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((achat) => (
              <tr 
                key={achat.id} 
                className="hover:bg-blue-50 cursor-pointer group"
                onClick={() => { setAchatSelectionne(achat); setShowDetailAchatModal(true); }}
              >
                <td className="px-3 py-3">
                  <p className="font-bold text-slate-800 text-base">{achat.numCommande}</p>
                </td>
                <td className="px-3 py-3">
                  <p className="font-medium">{achat.client}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${getTypeCouleur(achat.service)}`}>{achat.service}</span>
                    <span className="text-xs text-slate-500">{achat.ville}</span>
                  </div>
                  {achat.notes && <p className="text-xs text-slate-400 mt-1 line-clamp-1">{achat.notes.split('\n')[0]}</p>}
                </td>
                <td className="px-3 py-3 text-center">
                  <p className="font-medium">{achat.datePrevue}</p>
                  {achat.dateEnvoi && <p className="text-xs text-slate-400">Envoi: {achat.dateEnvoi}</p>}
                </td>
                <td className="px-2 py-3 text-center">{getAchatIcon(achat, 'Verre')}</td>
                <td className="px-2 py-3 text-center">{getAchatIcon(achat, 'Peinture')}</td>
                <td className="px-2 py-3 text-center">{getAchatIcon(achat, 'Fibre')}</td>
                <td className="px-2 py-3 text-center">{getAchatIcon(achat, 'Limon')}</td>
                <td className="px-2 py-3 text-center">{getAchatIcon(achat, 'Colonne')}</td>
                <td className="px-2 py-3 text-center">{getAchatIcon(achat, 'Attache')}</td>
                <td className="px-3 py-3 text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatutAchatCouleur(achat.statut)}`}>{achat.statut}</span>
                </td>
                {isHistorique && (
                  <td className="px-3 py-3 text-center text-emerald-700 font-medium">{achat.dateLivraison}</td>
                )}
                {!isHistorique && (
                  <td className="px-3 py-3 text-center" onClick={(e) => e.stopPropagation()}>
                    <div className="flex gap-1 justify-center">
                      <button 
                        onClick={() => { setAchatAValider(achat); setShowConfirmLivraison(true); }}
                        className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded" title="Valider livraison"
                      >
                        <Icon name="check" size={16}/>
                      </button>
                      <button onClick={() => { setAchatEnEdition({...achat}); setShowModifierAchatModal(true); }} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded" title="Modifier">
                        <Icon name="edit" size={16}/>
                      </button>
                      <button onClick={() => supprimerAchat(achat.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded" title="Supprimer">
                        <Icon name="trash" size={16}/>
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.length === 0 && <div className="p-12 text-center text-slate-400">Aucun achat trouvé</div>}
    </div>
  );

  // =============================================
  // RENDU PRINCIPAL
  // =============================================
  return (
    <div className="space-y-4">
      {/* Tous les modals */}
      <DetailAchatModal />
      <ConfirmLivraisonModal />
      <AchatFormModal show={showAjouterAchatModal} onClose={() => setShowAjouterAchatModal(false)} achat={nouvelAchat} setAchat={setNouvelAchat} onSave={ajouterAchat} titre="Nouvel achat" />
      <AchatFormModal show={showModifierAchatModal} onClose={() => { setShowModifierAchatModal(false); setAchatEnEdition(null); }} achat={achatEnEdition} setAchat={setAchatEnEdition} onSave={modifierAchat} titre="Modifier l'achat" />
      <FournisseurFormModal show={showAjouterFournisseurModal} onClose={() => setShowAjouterFournisseurModal(false)} fournisseur={nouveauFournisseur} setFournisseur={setNouveauFournisseur} onSave={ajouterFournisseur} titre="Ajouter un fournisseur" />
      <FournisseurFormModal show={showModifierFournisseurModal} onClose={() => { setShowModifierFournisseurModal(false); setFournisseurEnEdition(null); }} fournisseur={fournisseurEnEdition} setFournisseur={setFournisseurEnEdition} onSave={modifierFournisseur} titre="Modifier le fournisseur" />
      <ModifierDelaisModal />
      <ModifierRupturesModal />
      <ConfirmEnvoiDelaisModal />

      {/* Header */}
      <div className="bg-slate-800 rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 text-white hover:bg-slate-700 rounded-lg"><Icon name="chevron-left" size={28}/></button>
          <h1 className="text-2xl font-bold text-white">Liste des achats pour les commandes</h1>
        </div>
        <div className="flex items-center gap-6 text-white text-sm">
          <div className="text-right"><p className="text-slate-400">Commandes à mesurer:</p><p className="text-2xl font-bold text-blue-400">{statsAchats.total}</p></div>
        </div>
      </div>

      {/* Onglets */}
      <div className="flex gap-2 bg-slate-100 p-1 rounded-xl w-fit">
        <button onClick={() => setAchatsTab('achats')} className={`px-5 py-2.5 rounded-lg font-medium transition-all ${achatsTab === 'achats' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
          📦 Achats actifs ({achatsData.length})
        </button>
        <button onClick={() => setAchatsTab('historique')} className={`px-5 py-2.5 rounded-lg font-medium transition-all ${achatsTab === 'historique' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
          📋 Historique ({historiqueAchats.length})
        </button>
        <button onClick={() => setAchatsTab('delais')} className={`px-5 py-2.5 rounded-lg font-medium transition-all ${achatsTab === 'delais' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
          🕐 Délais de livraison
        </button>
        <button onClick={() => setAchatsTab('fournisseurs')} className={`px-5 py-2.5 rounded-lg font-medium transition-all ${achatsTab === 'fournisseurs' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
          🏭 Fournisseurs ({fournisseursList.length})
        </button>
      </div>

      {/* ===== ONGLET ACHATS ACTIFS ===== */}
      {achatsTab === 'achats' && (
        <>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="bg-white p-3 rounded-xl border border-amber-200"><p className="text-xs text-slate-500">En attente</p><p className="text-xl font-bold text-amber-600">{statsAchats.enAttente}</p></div>
            <div className="bg-white p-3 rounded-xl border border-purple-200"><p className="text-xs text-slate-500">Commandées</p><p className="text-xl font-bold text-purple-600">{statsAchats.commandees}</p></div>
            <div className="bg-white p-3 rounded-xl border border-blue-200"><p className="text-xs text-slate-500">En transit</p><p className="text-xl font-bold text-blue-600">{statsAchats.enTransit}</p></div>
            <div className="bg-white p-3 rounded-xl border border-emerald-200"><p className="text-xs text-slate-500">Montant total</p><p className="text-xl font-bold text-slate-800">{statsAchats.montantTotal.toLocaleString()} $</p></div>
            <div className="bg-white p-3 rounded-xl border border-slate-200"><p className="text-xs text-slate-500">Historique livrés</p><p className="text-xl font-bold text-emerald-600">{historiqueAchats.length}</p></div>
          </div>

          {/* Filtres */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 flex flex-wrap items-end gap-3">
            <div className="flex-1 min-w-[180px]">
              <label className="block text-xs text-slate-500 mb-1">Rechercher une commande</label>
              <input type="text" value={rechercheAchat} onChange={(e) => setRechercheAchat(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" placeholder="# commande, client, fournisseur..."/>
            </div>
            <div className="min-w-[150px]">
              <label className="block text-xs text-slate-500 mb-1">Client</label>
              <select value={filtreClient} onChange={(e) => setFiltreClient(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                <option value="">Tous</option>
                {clientsUniques.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="min-w-[130px]">
              <label className="block text-xs text-slate-500 mb-1">Statut</label>
              <select value={filtreStatutAchat} onChange={(e) => setFiltreStatutAchat(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                <option value="">Tous</option>
                {statutsAchat.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="min-w-[130px]">
              <label className="block text-xs text-slate-500 mb-1">Service</label>
              <select value={filtreTypeCommande} onChange={(e) => setFiltreTypeCommande(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                <option value="">Tous</option>
                {typesCommande.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="min-w-[150px]">
              <label className="block text-xs text-slate-500 mb-1">Type d'achat</label>
              <select value={filtreTypeAchat} onChange={(e) => setFiltreTypeAchat(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                <option value="">Tous types</option>
                {typesAchats.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <button onClick={() => setShowAjouterAchatModal(true)} className="px-5 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold rounded-lg flex items-center gap-2 shadow">
              <Icon name="plus" size={18}/>Nouvel achat
            </button>
          </div>

          {/* Légende des icônes */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
            <span className="font-semibold">Légende:</span>
            <span className="flex items-center gap-1"><span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-white text-xs">✓</span> Reçu</span>
            <span className="flex items-center gap-1"><span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-white text-xs">⇄</span> En transit</span>
            <span className="flex items-center gap-1"><span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-400 text-white text-xs">①</span> Commandé</span>
            <span className="flex items-center gap-1"><span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-400 text-white text-xs">⏳</span> En attente</span>
          </div>

          <TableauAchats data={achatsFiltres} isHistorique={false} />
        </>
      )}

      {/* ===== ONGLET HISTORIQUE ===== */}
      {achatsTab === 'historique' && (
        <>
          <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 flex items-center gap-3">
            <Icon name="check" size={24} className="text-emerald-600"/>
            <div>
              <p className="font-semibold text-emerald-800">Historique des achats livrés</p>
              <p className="text-sm text-emerald-600">{historiqueAchats.length} livraison(s) complétée(s)</p>
            </div>
          </div>
          <TableauAchats data={historiqueAchats} isHistorique={true} />
        </>
      )}

      {/* ===== ONGLET DÉLAIS ===== */}
      {achatsTab === 'delais' && (
        <>
          <div className="flex justify-end gap-3">
            <button onClick={() => setShowModifierDelaisModal(true)} className="px-4 py-2 bg-white border border-slate-300 rounded-lg flex items-center gap-2 hover:bg-slate-50 text-sm font-medium"><Icon name="clock" size={18}/>Modifier délai semaines</button>
            <button onClick={() => setShowModifierRupturesModal(true)} className="px-4 py-2 bg-white border border-slate-300 rounded-lg flex items-center gap-2 hover:bg-slate-50 text-sm font-medium"><Icon name="file" size={18}/>Modifier ruptures de stock</button>
            <button onClick={() => setShowConfirmEnvoiDelais(true)} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-2 text-sm font-medium"><Icon name="mail" size={18}/>Envoi par courriel</button>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold text-slate-700 underline text-lg">Secteur</th>
                  <th className="px-6 py-3 text-center font-semibold text-slate-700 underline text-lg" colSpan={2}>Délai</th>
                  <th className="px-6 py-3 text-center font-semibold text-blue-600 underline text-lg">Date de livraison</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {delaisLivraison.map((d, i) => (
                  <tr key={d.id} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-6 py-3 font-semibold">{d.secteur}</td>
                    <td className="px-4 py-3 text-right font-bold text-lg">{d.delaiSemaines}</td>
                    <td className="px-4 py-3 text-left text-slate-600 font-semibold">SEMAINES</td>
                    <td className="px-6 py-3 text-center font-medium">{calculerDateLivraison(d.delaiSemaines)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-slate-600">Début semaine de la construction:</span>
            <input type="date" value={debutConstruction} onChange={(e) => setDebutConstruction(e.target.value)} className="px-3 py-2 border border-slate-300 rounded-lg"/>
          </div>
          {rupturesStock.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-center underline mb-4">Rupture de stock</h3>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-slate-200">
                    {rupturesStock.map(r => (
                      <tr key={r.id}><td className="px-6 py-3 font-semibold">{r.piece}</td><td className="px-6 py-3 text-center">{r.couleur}</td><td className="px-6 py-3 text-center"><span className="bg-slate-100 px-3 py-1 rounded">{formaterDate(r.dateReception)}</span></td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}

      {/* ===== ONGLET FOURNISSEURS ===== */}
      {achatsTab === 'fournisseurs' && (
        <>
          <div className="flex items-center justify-between gap-4">
            <input type="text" value={rechercheFournisseur} onChange={(e) => setRechercheFournisseur(e.target.value)} className="px-4 py-2 border border-slate-300 rounded-lg w-full max-w-md" placeholder="Rechercher un fournisseur..."/>
            <button onClick={() => setShowAjouterFournisseurModal(true)} className="px-5 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold rounded-lg flex items-center gap-2 shadow whitespace-nowrap"><Icon name="plus" size={18}/>Ajouter un fournisseur</button>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Fournisseur</th><th className="px-4 py-3 text-left">Adresse</th><th className="px-4 py-3 text-center">Ville</th><th className="px-4 py-3 text-center">Téléphone</th><th className="px-4 py-3 text-center">Contact</th><th className="px-4 py-3 text-center">Email</th><th className="px-4 py-3 text-center">Délai</th><th className="px-4 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {fournisseursList.filter(f => !rechercheFournisseur || f.nom.toLowerCase().includes(rechercheFournisseur.toLowerCase())).map((f, i) => (
                    <tr key={f.id} className={`hover:bg-slate-50 ${i % 2 === 0 ? 'bg-white' : 'bg-sky-50'}`}>
                      <td className="px-4 py-3 font-bold">{f.nom}</td><td className="px-4 py-3 text-xs text-slate-600">{f.adresse}</td><td className="px-4 py-3 text-center text-slate-600">{f.ville}</td><td className="px-4 py-3 text-center">{f.telephone}</td><td className="px-4 py-3 text-center">{f.contact}</td><td className="px-4 py-3 text-center text-xs">{f.email}</td>
                      <td className="px-4 py-3 text-center">{f.delaiMoyen && <span className="px-3 py-1 bg-slate-100 rounded-full text-xs">{f.delaiMoyen}</span>}</td>
                      <td className="px-4 py-3 text-center"><div className="flex gap-1 justify-center"><button onClick={() => { setFournisseurEnEdition({...f}); setShowModifierFournisseurModal(true); }} className="px-3 py-1 bg-blue-500 text-white text-xs rounded">Modifier</button><button onClick={() => supprimerFournisseur(f.id)} className="px-3 py-1 bg-red-500 text-white text-xs rounded">Supprimer</button></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
  // === RENTABILITÉ ===
// === RENTABILITÉ DES INSTALLATIONS ===
const Rentabilite = () => {
  // États pour les modals
  const [showEntreeHeuresModal, setShowEntreeHeuresModal] = useState(false);
  const [showModificationHeuresModal, setShowModificationHeuresModal] = useState(false);
  const [showCoutInstallationModal, setShowCoutInstallationModal] = useState(false);
  
  // État pour le coût d'installation (modifiable par directeur seulement)
  const [coutHoraireInstallation, setCoutHoraireInstallation] = useState(160);
  
  // États pour les filtres
  const [filtreProjet, setFiltreProjet] = useState('');
  const [filtreClient, setFiltreClient] = useState('');
  const [filtreDateDebut, setFiltreDateDebut] = useState('');
  const [filtreDateFin, setFiltreDateFin] = useState('');
  const [filtreAnnee, setFiltreAnnee] = useState('2026');
  
  // État pour l'entrée d'heures
  const [entreeHeures, setEntreeHeures] = useState({
    numProjet: '',
    nombreHeures: '',
    dateInstallation: new Date().toISOString().split('T')[0]
  });
  
  // État pour la modification
  const [projetEnEdition, setProjetEnEdition] = useState(null);
  const [rechercheModification, setRechercheModification] = useState('');
  
  // Données des heures d'installation (simulées - à connecter à votre base de données)
  const [heuresInstallation, setHeuresInstallation] = useState([
    { id: 1, numProjet: '210725-1', client: 'Martine Perron / Mario Denis', venteInstallation: 877, heuresReelles: 2.75, dateDebut: '2022-04-13', dateFin: '2022-04-13' },
    { id: 2, numProjet: '220258', client: 'Brigitte Duchesneau', venteInstallation: 350, heuresReelles: 0.5, dateDebut: '2022-05-24', dateFin: '2022-05-24' },
    { id: 3, numProjet: '220255', client: 'Marie-Hélène Labreux', venteInstallation: 559.25, heuresReelles: 2, dateDebut: '2022-06-07', dateFin: '2022-06-07' },
    { id: 4, numProjet: '220425', client: 'André Morency', venteInstallation: 350, heuresReelles: 0.75, dateDebut: '2022-06-29', dateFin: '2022-06-29' },
    { id: 5, numProjet: '220256', client: 'Daniel Boucher', venteInstallation: 586.63, heuresReelles: 2.25, dateDebut: '2022-11-09', dateFin: '2022-11-09' },
    { id: 6, numProjet: '230125', client: 'SG Habitation', venteInstallation: 286.75, heuresReelles: 1.25, dateDebut: '2023-03-28', dateFin: '2023-03-28' },
    { id: 7, numProjet: '250961', client: 'Pierre Gagnon', venteInstallation: 450, heuresReelles: 2, dateDebut: '2026-01-14', dateFin: '2026-01-14' },
    { id: 8, numProjet: '251130', client: 'Jean Tremblay', venteInstallation: 720, heuresReelles: 4, dateDebut: '2026-01-14', dateFin: '2026-01-14' },
    { id: 9, numProjet: '251299', client: 'Marie Lavoie', venteInstallation: 980, heuresReelles: 5.5, dateDebut: '2026-01-15', dateFin: '2026-01-15' },
    { id: 10, numProjet: '251226', client: 'François Dubois', venteInstallation: 1250, heuresReelles: 7, dateDebut: '2026-01-19', dateFin: '2026-01-19' },
    { id: 11, numProjet: '251230', client: 'Sylvie Martin', venteInstallation: 560, heuresReelles: 3, dateDebut: '2026-01-22', dateFin: '2026-01-22' },
  ]);

  // Vérifier si l'utilisateur est directeur (à adapter selon votre système d'authentification)
  // Utilise la variable 'user' de votre app ou true par défaut
  const estDirecteur = true; // TODO: Remplacer par votre système d'authentification (ex: user?.role === 'Directeur')

  // Calcul de la rentabilité
  const calculerRentabilite = (venteInstallation, heuresReelles) => {
    const coutInstallation = heuresReelles * coutHoraireInstallation;
    if (venteInstallation === 0) return 0;
    return ((venteInstallation - coutInstallation) / venteInstallation) * 100;
  };

  // Calcul du coût d'installation
  const calculerCoutInstallation = (heuresReelles) => {
    return heuresReelles * coutHoraireInstallation;
  };

  // Filtrer les données
  const donneesFiltrees = heuresInstallation.filter(item => {
    const matchProjet = !filtreProjet || item.numProjet.toLowerCase().includes(filtreProjet.toLowerCase());
    const matchClient = !filtreClient || item.client.toLowerCase().includes(filtreClient.toLowerCase());
    const matchDateDebut = !filtreDateDebut || item.dateDebut >= filtreDateDebut;
    const matchDateFin = !filtreDateFin || item.dateFin <= filtreDateFin;
    return matchProjet && matchClient && matchDateDebut && matchDateFin;
  });

  // Statistiques
  const stats = {
    nombreInstallations: donneesFiltrees.length,
    rentabiliteSup20: donneesFiltrees.filter(item => calculerRentabilite(item.venteInstallation, item.heuresReelles) > 20).length,
    moyenneRentabilite: donneesFiltrees.length > 0 
      ? donneesFiltrees.reduce((acc, item) => acc + calculerRentabilite(item.venteInstallation, item.heuresReelles), 0) / donneesFiltrees.length 
      : 0
  };

  // Couleur de rentabilité
  const getCouleurRentabilite = (rentabilite) => {
    if (rentabilite >= 50) return 'bg-emerald-500 text-white';
    if (rentabilite >= 30) return 'bg-green-500 text-white';
    if (rentabilite >= 20) return 'bg-lime-500 text-white';
    if (rentabilite >= 10) return 'bg-yellow-500 text-yellow-900';
    if (rentabilite >= 0) return 'bg-orange-500 text-white';
    return 'bg-red-500 text-white';
  };

  // Formater la date en français
  const formaterDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-CA', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  // Enregistrer une nouvelle entrée d'heures
  const enregistrerHeures = () => {
    if (!entreeHeures.numProjet || !entreeHeures.nombreHeures) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    // Chercher si le projet existe dans commandesList
    const projetExistant = commandesList.find(c => c.num === entreeHeures.numProjet);
    
    const nouvelleEntree = {
      id: heuresInstallation.length + 1,
      numProjet: entreeHeures.numProjet,
      client: projetExistant?.client || 'Client inconnu',
      venteInstallation: projetExistant?.prixVente || 0,
      heuresReelles: parseFloat(entreeHeures.nombreHeures),
      dateDebut: entreeHeures.dateInstallation,
      dateFin: entreeHeures.dateInstallation
    };
    
    setHeuresInstallation([...heuresInstallation, nouvelleEntree]);
    setEntreeHeures({ numProjet: '', nombreHeures: '', dateInstallation: new Date().toISOString().split('T')[0] });
    setShowEntreeHeuresModal(false);
  };

  // Supprimer une entrée
  const supprimerEntree = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette entrée ?')) {
      setHeuresInstallation(heuresInstallation.filter(h => h.id !== id));
    }
  };

  // Sauvegarder la modification
  const sauvegarderModification = (id, nouvellesHeures, nouvelleDate) => {
    setHeuresInstallation(heuresInstallation.map(h => 
      h.id === id ? { ...h, heuresReelles: parseFloat(nouvellesHeures), dateDebut: nouvelleDate, dateFin: nouvelleDate } : h
    ));
    setProjetEnEdition(null);
  };

  // Filtrer pour modification par année
  const donneesModification = heuresInstallation.filter(item => {
    const annee = item.dateDebut.split('-')[0];
    const matchAnnee = annee === filtreAnnee;
    const matchRecherche = !rechercheModification || item.numProjet.includes(rechercheModification);
    return matchAnnee && matchRecherche;
  });

  // === MODAL ENTRÉE D'HEURES ===
  const EntreeHeuresModal = () => {
    if (!showEntreeHeuresModal) return null;
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-slate-600 rounded-2xl shadow-2xl w-full max-w-lg p-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8 underline">
            Entrée d'heures d'installation
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <label className="text-white text-lg w-48"># Projet:</label>
              <input 
                type="text"
                value={entreeHeures.numProjet}
                onChange={(e) => setEntreeHeures({...entreeHeures, numProjet: e.target.value})}
                className="flex-1 px-4 py-3 rounded-lg text-lg"
                placeholder="Ex: 251299"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <label className="text-white text-lg w-48">Nombre d'heures:</label>
              <input 
                type="number"
                step="0.25"
                value={entreeHeures.nombreHeures}
                onChange={(e) => setEntreeHeures({...entreeHeures, nombreHeures: e.target.value})}
                className="flex-1 px-4 py-3 rounded-lg text-lg"
                placeholder="Ex: 2.5"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <label className="text-white text-lg w-48">Date d'installation:</label>
              <input 
                type="date"
                value={entreeHeures.dateInstallation}
                onChange={(e) => setEntreeHeures({...entreeHeures, dateInstallation: e.target.value})}
                className="flex-1 px-4 py-3 rounded-lg text-lg"
              />
            </div>
          </div>
          
          <div className="flex justify-center gap-6 mt-10">
            <button 
              onClick={() => setShowEntreeHeuresModal(false)}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full text-lg"
            >
              Annuler
            </button>
            <button 
              onClick={enregistrerHeures}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full text-lg"
            >
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    );
  };

  // === MODAL MODIFICATION DES HEURES ===
  const ModificationHeuresModal = () => {
    if (!showModificationHeuresModal) return null;
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-slate-100 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-blue-600 text-center underline">
              Modification des heures d'installation
            </h2>
            
            <div className="flex items-center justify-center gap-8 mt-6">
              <div className="flex items-center gap-3">
                <label className="text-slate-700">Rechercher un # de projet:</label>
                <input 
                  type="text"
                  value={rechercheModification}
                  onChange={(e) => setRechercheModification(e.target.value)}
                  className="px-4 py-2 border-2 border-blue-400 rounded-lg w-40"
                  placeholder="# projet"
                />
              </div>
              
              <div className="flex items-center gap-3">
                <label className="text-slate-700">Année d'installation:</label>
                <select 
                  value={filtreAnnee}
                  onChange={(e) => setFiltreAnnee(e.target.value)}
                  className="px-4 py-2 border border-slate-300 rounded-lg"
                >
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <table className="w-full">
              <thead className="bg-white sticky top-0">
                <tr className="border-b-2 border-blue-400">
                  <th className="px-6 py-4 text-blue-600 font-semibold"># Projet</th>
                  <th className="px-6 py-4 text-blue-600 font-semibold">Nombre d'heures</th>
                  <th className="px-6 py-4 text-blue-600 font-semibold">Date de l'installation</th>
                  <th className="px-6 py-4 text-blue-600 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {donneesModification.map(item => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-center font-medium">{item.numProjet}</td>
                    <td className="px-6 py-4 text-center">
                      {projetEnEdition === item.id ? (
                        <input 
                          type="number"
                          step="0.25"
                          defaultValue={item.heuresReelles}
                          id={`heures-${item.id}`}
                          className="w-20 px-2 py-1 border rounded text-center"
                        />
                      ) : (
                        item.heuresReelles
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {projetEnEdition === item.id ? (
                        <input 
                          type="date"
                          defaultValue={item.dateDebut}
                          id={`date-${item.id}`}
                          className="px-2 py-1 border rounded"
                        />
                      ) : (
                        formaterDate(item.dateDebut)
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        {projetEnEdition === item.id ? (
                          <>
                            <button 
                              onClick={() => {
                                const heures = document.getElementById(`heures-${item.id}`).value;
                                const date = document.getElementById(`date-${item.id}`).value;
                                sauvegarderModification(item.id, heures, date);
                              }}
                              className="p-2 text-blue-600 hover:bg-blue-100 rounded"
                              title="Sauvegarder"
                            >
                              <Icon name="save" size={20}/>
                            </button>
                            <button 
                              onClick={() => setProjetEnEdition(null)}
                              className="p-2 text-slate-600 hover:bg-slate-100 rounded"
                              title="Annuler"
                            >
                              <Icon name="x" size={20}/>
                            </button>
                          </>
                        ) : (
                          <>
                            <button 
                              onClick={() => setProjetEnEdition(item.id)}
                              className="p-2 text-blue-600 hover:bg-blue-100 rounded"
                              title="Modifier"
                            >
                              <Icon name="edit" size={20}/>
                            </button>
                            <button 
                              onClick={() => supprimerEntree(item.id)}
                              className="p-2 text-red-600 hover:bg-red-100 rounded"
                              title="Supprimer"
                            >
                              <Icon name="trash" size={20}/>
                            </button>
                          </>
                        )}
                        <button className="p-2 text-slate-400 hover:bg-slate-100 rounded">
                          <Icon name="chevron-right" size={20}/>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t flex justify-center">
            <button 
              onClick={() => setShowModificationHeuresModal(false)}
              className="px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full text-lg"
            >
              Sortir
            </button>
          </div>
        </div>
      </div>
    );
  };

  // === MODAL COÛT D'INSTALLATION ===
  const CoutInstallationModal = () => {
    if (!showCoutInstallationModal) return null;
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-slate-600 rounded-2xl shadow-2xl w-full max-w-md p-8">
          <h2 className="text-xl font-bold text-white text-center mb-6 underline">
            Modification du coût d'installation
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <label className="text-white text-xl">Coût d'installation:</label>
            <input 
              type="number"
              defaultValue={coutHoraireInstallation}
              id="nouveau-cout-installation"
              className="w-24 px-4 py-2 rounded-lg text-xl text-center"
              disabled={!estDirecteur}
            />
            <span className="text-white text-xl">$/h</span>
          </div>
          
          {!estDirecteur && (
            <p className="text-yellow-300 text-center text-sm mb-4">
              ⚠️ Seul le directeur peut modifier ce paramètre
            </p>
          )}
          
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setShowCoutInstallationModal(false)}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full"
            >
              Annuler
            </button>
            {estDirecteur && (
              <button 
                onClick={() => {
                  const nouveauCout = parseFloat(document.getElementById('nouveau-cout-installation').value);
                  if (nouveauCout > 0) {
                    setCoutHoraireInstallation(nouveauCout);
                  }
                  setShowCoutInstallationModal(false);
                }}
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full"
              >
                Modifier
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  // === RENDU PRINCIPAL ===
  return (
    <div className="space-y-6">
      {/* Modals */}
      <EntreeHeuresModal />
      <ModificationHeuresModal />
      <CoutInstallationModal />

      {/* Header avec logo et boutons */}
      <div className="bg-slate-800 rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 text-white hover:bg-slate-700 rounded-lg">
            <Icon name="chevron-left" size={28}/>
          </button>
          <h1 className="text-2xl font-bold text-white">Rentabilité des installations</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowEntreeHeuresModal(true)}
            className="flex flex-col items-center p-3 hover:bg-slate-700 rounded-lg text-white"
          >
            <Icon name="check-square" size={24}/>
            <span className="text-xs mt-1">Entrée d'heures</span>
          </button>
          <button 
            onClick={() => setShowModificationHeuresModal(true)}
            className="flex flex-col items-center p-3 hover:bg-slate-700 rounded-lg text-white"
          >
            <Icon name="edit" size={24}/>
            <span className="text-xs mt-1">Modifier des entrées</span>
          </button>
          <button 
            onClick={() => setShowCoutInstallationModal(true)}
            className="flex flex-col items-center p-3 hover:bg-slate-700 rounded-lg text-white"
          >
            <Icon name="file" size={24}/>
            <span className="text-xs mt-1">Coût d'installation</span>
          </button>
        </div>
      </div>

      {/* Filtres et Statistiques */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-wrap items-end gap-6">
          {/* Filtres */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1"># Projet</label>
              <input 
                type="text"
                value={filtreProjet}
                onChange={(e) => setFiltreProjet(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                placeholder="Rechercher..."
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Client</label>
              <input 
                type="text"
                value={filtreClient}
                onChange={(e) => setFiltreClient(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                placeholder="Rechercher..."
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Date début</label>
              <input 
                type="date"
                value={filtreDateDebut}
                onChange={(e) => setFiltreDateDebut(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Date fin</label>
              <input 
                type="date"
                value={filtreDateFin}
                onChange={(e) => setFiltreDateFin(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
              />
            </div>
          </div>
          
          {/* Statistiques */}
          <div className="flex items-center gap-6 bg-slate-50 px-6 py-4 rounded-xl">
            <div className="text-right">
              <p className="text-sm text-slate-600">Nombre d'installation:</p>
              <p className="text-2xl font-bold text-slate-800">{stats.nombreInstallations}</p>
            </div>
            <div className="w-px h-12 bg-slate-300"></div>
            <div className="text-right">
              <p className="text-sm text-slate-600">% de Rentabilité &gt; 20%:</p>
              <p className="text-2xl font-bold text-slate-800">{stats.rentabiliteSup20}</p>
            </div>
            <div className="w-px h-12 bg-slate-300"></div>
            <div className="text-right">
              <p className="text-sm text-slate-600">Moyenne en %:</p>
              <p className="text-2xl font-bold text-slate-800">{stats.moyenneRentabilite.toFixed(2)}</p>
            </div>
            <div className="w-px h-12 bg-slate-300"></div>
            <div className="text-right">
              <p className="text-sm text-slate-600">Coût horaire:</p>
              <p className="text-2xl font-bold text-blue-600">{coutHoraireInstallation}$</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tableau de rentabilité */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold"># Projet</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Client</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Vente Installation $</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Date début<br/>Date fin</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Nombre d'heures</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Coût installation</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Rentabilité %</th>
                <th className="px-4 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {donneesFiltrees.map(item => {
                const coutInstallation = calculerCoutInstallation(item.heuresReelles);
                const rentabilite = calculerRentabilite(item.venteInstallation, item.heuresReelles);
                
                return (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-800">{item.numProjet}</td>
                    <td className="px-6 py-4 text-slate-600">{item.client}</td>
                    <td className="px-6 py-4 text-center font-medium">{item.venteInstallation.toLocaleString('fr-CA', { minimumFractionDigits: 2 })}</td>
                    <td className="px-6 py-4 text-center text-sm">
                      <div>{formaterDate(item.dateDebut)}</div>
                      <div>{formaterDate(item.dateFin)}</div>
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-lg">{item.heuresReelles.toString().replace('.', ',')}</td>
                    <td className="px-6 py-4 text-center font-medium">{coutInstallation.toLocaleString('fr-CA', { minimumFractionDigits: 1 })}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-block min-w-[80px] px-4 py-2 rounded-lg font-bold text-lg ${getCouleurRentabilite(rentabilite)}`}>
                        {rentabilite.toFixed(2).replace('.', ',')}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg">
                        <Icon name="chevron-right" size={24}/>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {donneesFiltrees.length === 0 && (
          <div className="p-12 text-center">
            <Icon name="search" size={48} className="mx-auto mb-4 text-slate-300"/>
            <p className="text-slate-500">Aucune installation trouvée avec ces filtres</p>
          </div>
        )}
      </div>

      {/* Légende des couleurs */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
        <p className="text-sm font-semibold text-slate-600 mb-3">Légende de rentabilité:</p>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-emerald-500"></span>
            <span className="text-sm text-slate-600">≥ 50% Excellent</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-green-500"></span>
            <span className="text-sm text-slate-600">≥ 30% Très bon</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-lime-500"></span>
            <span className="text-sm text-slate-600">≥ 20% Bon</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-yellow-500"></span>
            <span className="text-sm text-slate-600">≥ 10% Acceptable</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-orange-500"></span>
            <span className="text-sm text-slate-600">≥ 0% Faible</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-red-500"></span>
            <span className="text-sm text-slate-600">&lt; 0% Perte</span>
          </div>
        </div>
      </div>
    </div>
  );
};
  // === ATTENTES ===
  // === ATTENTES ===
const Attentes = () => {
  // États pour les filtres
  const [filtreRepresentant, setFiltreRepresentant] = useState('');
  const [showRepresentantDropdown, setShowRepresentantDropdown] = useState(false);
  const [selectedRepresentants, setSelectedRepresentants] = useState([]);
  
  // État pour le détail d'une commande
  const [commandeDetaillee, setCommandeDetaillee] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  
  // État pour l'envoi automatique
  const [envoiAutoLundi, setEnvoiAutoLundi] = useState(true);
  const [showConfirmEnvoi, setShowConfirmEnvoi] = useState(false);
  
  // Liste des représentants avec leurs emails
  const representantsList = [
    { id: 1, initiales: 'D.D', nom: 'Daniel Doré', email: 'd.dore@rampesgardex.com' },
    { id: 2, initiales: 'M.B', nom: 'Martin Boiteau', email: 'martin.boiteau@rampesgardex.com' },
    { id: 3, initiales: 'G.D.', nom: 'Guy Drolet', email: 'guy.drolet@rampesgardex.com' },
    { id: 4, initiales: 'Y.G', nom: 'Yves Gosselin', email: 'yves.gosselin@rampesgardex.com' },
  ];
  
  // Données des commandes en attente (enrichies avec plus de détails)
  const [commandesEnAttente, setCommandesEnAttente] = useState([
    { 
      id: 1, 
      numProjet: '241088', 
      representant: 'D.D', 
      client: 'Les Projets Meraki', 
      dateEntree: '2024-12-02',
      datePrevue: '2026-04-26',
      service: 'Installation',
      mesure: '√',
      plan: '√',
      envoyeProduction: '√',
      productionTerminee: '√',
      termine: 'At.C',
      dateDernierEnvoi: '2026-01-21',
      attenteEnvoyee: true,
      notes: 'Attente confirmation de la pente avant de commander les verres (04 déc.)\n3-1/2" de pente sur frâme lors des mesures / Mettre en attente pour le printemps 31-01.',
      typeAttente: 'client',
      details: {
        adresse: '123 Rue des Érables, Québec',
        telephone: '418-555-1234',
        piedsLineaires: 45,
        couleur: 'Noir',
        modele: 'Classique'
      }
    },
    { 
      id: 2, 
      numProjet: '250062-3', 
      representant: 'D.D', 
      client: 'Drolet construction', 
      dateEntree: '2025-02-07',
      datePrevue: '2026-04-26',
      service: 'Installation',
      mesure: '√',
      plan: 'N/A',
      envoyeProduction: 'N/A',
      productionTerminee: 'N/A',
      termine: 'At.C',
      dateDernierEnvoi: '2026-01-21',
      attenteEnvoyee: true,
      notes: 'mesuré 2/09 attente couleur\ndossier remis a Daniel\ndossier remis a dan pour approbation grandeur de fibres vet couleur',
      typeAttente: 'client',
      details: {
        adresse: '456 Boul. Industriel, Lévis',
        telephone: '418-555-5678',
        piedsLineaires: 120,
        couleur: 'En attente',
        modele: 'Commercial'
      }
    },
    { 
      id: 3, 
      numProjet: '250100', 
      representant: 'D.D', 
      client: 'Const. Couture & Tanguay', 
      dateEntree: '2025-03-13',
      datePrevue: '2026-04-26',
      service: 'Installation',
      mesure: 'At.C',
      plan: '',
      envoyeProduction: '',
      productionTerminee: '',
      termine: '',
      dateDernierEnvoi: '2026-01-21',
      attenteEnvoyee: false,
      notes: '',
      typeAttente: 'client',
      details: {
        adresse: '789 Rue Principale, Beauport',
        telephone: '418-555-9012',
        piedsLineaires: 85,
        couleur: 'Blanc',
        modele: 'Moderne'
      }
    },
    { 
      id: 4, 
      numProjet: '250101', 
      representant: 'G.D.', 
      client: 'Jean-Guy Pelletier', 
      dateEntree: '2025-03-14',
      datePrevue: '2026-04-26',
      service: 'Installation',
      mesure: 'At.C',
      plan: '',
      envoyeProduction: '',
      productionTerminee: '',
      termine: '',
      dateDernierEnvoi: '2025-12-15',
      attenteEnvoyee: false,
      notes: 'Aviser Guy pour les mesures',
      typeAttente: 'representant',
      details: {
        adresse: '321 Chemin du Lac, Lac-Beauport',
        telephone: '418-555-3456',
        piedsLineaires: 35,
        couleur: 'Gris',
        modele: 'Classique'
      }
    },
    { 
      id: 5, 
      numProjet: '250187', 
      representant: 'D.D', 
      client: 'Dalcon', 
      dateEntree: '2025-04-16',
      datePrevue: '2026-04-26',
      service: 'Installation',
      mesure: 'At.C',
      plan: '',
      envoyeProduction: '',
      productionTerminee: '',
      termine: '',
      dateDernierEnvoi: '2026-01-30',
      attenteEnvoyee: true,
      notes: 'Prévue automne 2025',
      typeAttente: 'client',
      details: {
        adresse: '555 Ave Commerciale, Ste-Foy',
        telephone: '418-555-7890',
        piedsLineaires: 200,
        couleur: 'Noir',
        modele: 'Commercial'
      }
    },
    { 
      id: 6, 
      numProjet: '250205', 
      representant: 'M.B', 
      client: 'Construction ABC', 
      dateEntree: '2025-05-01',
      datePrevue: '2026-05-15',
      service: 'Installation',
      mesure: '√',
      plan: 'At.C',
      envoyeProduction: '',
      productionTerminee: '',
      termine: '',
      dateDernierEnvoi: '',
      attenteEnvoyee: false,
      notes: 'En attente approbation du plan par le client',
      typeAttente: 'client',
      details: {
        adresse: '999 Rue du Commerce, Charlesbourg',
        telephone: '418-555-1111',
        piedsLineaires: 60,
        couleur: 'Brun',
        modele: 'Rustique'
      }
    },
    { 
      id: 7, 
      numProjet: '250220', 
      representant: 'Y.G', 
      client: 'Résidences du Fleuve', 
      dateEntree: '2025-05-10',
      datePrevue: '2026-06-01',
      service: 'Installation',
      mesure: 'At.C',
      plan: '',
      envoyeProduction: '',
      productionTerminee: '',
      termine: '',
      dateDernierEnvoi: '2026-01-15',
      attenteEnvoyee: true,
      notes: 'Attente confirmation budget du client',
      typeAttente: 'representant',
      details: {
        adresse: '777 Boul. du Fleuve, Lévis',
        telephone: '418-555-2222',
        piedsLineaires: 150,
        couleur: 'Charbon',
        modele: 'Luxe'
      }
    },
  ]);

  // Statistiques
  const stats = {
    commandesEnAttentes: commandesEnAttente.length,
    commandesTotales: 184, // À connecter à votre vraie donnée
  };

  // Filtrer les commandes
  const commandesFiltrees = commandesEnAttente.filter(cmd => {
    if (selectedRepresentants.length === 0) return true;
    return selectedRepresentants.includes(cmd.representant);
  });

  // Compter les attentes par représentant
  const getAttentesParRepresentant = (initiales) => {
    return commandesEnAttente.filter(cmd => cmd.representant === initiales).length;
  };

  // Sélectionner/désélectionner un représentant
  const toggleRepresentant = (initiales) => {
    if (selectedRepresentants.includes(initiales)) {
      setSelectedRepresentants(selectedRepresentants.filter(r => r !== initiales));
    } else {
      setSelectedRepresentants([...selectedRepresentants, initiales]);
    }
  };

  // Retirer un représentant du filtre
  const retirerRepresentant = (initiales) => {
    setSelectedRepresentants(selectedRepresentants.filter(r => r !== initiales));
  };

  // Obtenir la couleur du statut
  const getStatutCouleur = (valeur) => {
    if (valeur === '√') return 'text-slate-800';
    if (valeur === 'N/A') return 'text-slate-500';
    if (valeur === 'At.C') return 'bg-sky-200 text-sky-800 px-2 py-1 rounded';
    return 'text-slate-400';
  };

  // Obtenir la couleur du badge service
  const getServiceCouleur = (service) => {
    switch(service) {
      case 'Installation': return 'bg-red-500 text-white';
      case 'Livraison': return 'bg-blue-500 text-white';
      case 'Cueillette': return 'bg-yellow-500 text-yellow-900';
      default: return 'bg-slate-500 text-white';
    }
  };

  // Envoyer les attentes à un représentant par email
  const envoyerAttentesRepresentant = (representant) => {
    const rep = representantsList.find(r => r.initiales === representant || r.initiales === representant);
    if (!rep) {
      alert('Représentant non trouvé');
      return;
    }

    const attentesRep = commandesEnAttente.filter(cmd => cmd.representant === representant);
    
    if (attentesRep.length === 0) {
      alert(`Aucune attente pour ${rep.nom}`);
      return;
    }

    // Construire le contenu de l'email
    let contenuEmail = `Bonjour ${rep.nom},\n\nVoici la liste de vos commandes en attente:\n\n`;
    
    attentesRep.forEach(cmd => {
      contenuEmail += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
      contenuEmail += `📋 Projet #${cmd.numProjet}\n`;
      contenuEmail += `👤 Client: ${cmd.client}\n`;
      contenuEmail += `📍 Adresse: ${cmd.details.adresse}\n`;
      contenuEmail += `📞 Téléphone: ${cmd.details.telephone}\n`;
      contenuEmail += `📅 Date d'entrée: ${cmd.dateEntree}\n`;
      contenuEmail += `📅 Date prévue: ${cmd.datePrevue}\n`;
      contenuEmail += `🔧 Service: ${cmd.service}\n`;
      contenuEmail += `📏 Pieds linéaires: ${cmd.details.piedsLineaires}\n`;
      contenuEmail += `🎨 Couleur: ${cmd.details.couleur}\n`;
      contenuEmail += `📝 Notes: ${cmd.notes || 'Aucune'}\n\n`;
    });
    
    contenuEmail += `\nMerci de faire le suivi de ces dossiers.\n\nCordialement,\nRampes Gardex`;

    console.log(`📧 EMAIL ENVOYÉ À: ${rep.email}`);
    console.log(contenuEmail);

    // Mettre à jour le statut d'envoi
    setCommandesEnAttente(commandesEnAttente.map(cmd => 
      cmd.representant === representant 
        ? { ...cmd, attenteEnvoyee: true, dateDernierEnvoi: new Date().toISOString().split('T')[0] }
        : cmd
    ));

    alert(`✅ Email envoyé à ${rep.nom} (${rep.email})\n\n${attentesRep.length} commande(s) en attente incluse(s).`);
  };

  // Envoyer toutes les attentes à tous les représentants
  const envoyerToutesAttentes = () => {
    const representantsAvecAttentes = [...new Set(commandesEnAttente.map(cmd => cmd.representant))];
    
    representantsAvecAttentes.forEach(rep => {
      envoyerAttentesRepresentant(rep);
    });

    alert(`✅ Emails envoyés à ${representantsAvecAttentes.length} représentant(s)`);
    setShowConfirmEnvoi(false);
  };

  // Simuler l'envoi automatique du lundi
  const verifierEnvoiAutomatique = () => {
    const aujourdhui = new Date();
    if (aujourdhui.getDay() === 1 && envoiAutoLundi) { // 1 = Lundi
      console.log('📅 C\'est lundi! Envoi automatique des attentes...');
      envoyerToutesAttentes();
    }
  };

  // Ouvrir le détail d'une commande
  const ouvrirDetail = (commande) => {
    setCommandeDetaillee(commande);
    setShowDetailModal(true);
  };

  // Modal de détail de commande
  const DetailCommandeModal = () => {
    if (!showDetailModal || !commandeDetaillee) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-200 bg-slate-800 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Détail Commande #{commandeDetaillee.numProjet}</h2>
                <p className="text-slate-300">{commandeDetaillee.client}</p>
              </div>
              <button 
                onClick={() => setShowDetailModal(false)}
                className="p-2 hover:bg-slate-700 rounded-lg"
              >
                <Icon name="x" size={24}/>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Informations générales */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <Icon name="user" size={18}/>
                  Informations client
                </h3>
                <div className="space-y-2 text-sm">
                  <p><span className="text-slate-500">Client:</span> <strong>{commandeDetaillee.client}</strong></p>
                  <p><span className="text-slate-500">Adresse:</span> {commandeDetaillee.details.adresse}</p>
                  <p><span className="text-slate-500">Téléphone:</span> {commandeDetaillee.details.telephone}</p>
                  <p><span className="text-slate-500">Représentant:</span> <strong>{commandeDetaillee.representant}</strong></p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <Icon name="calendar" size={18}/>
                  Dates
                </h3>
                <div className="space-y-2 text-sm">
                  <p><span className="text-slate-500">Date d'entrée:</span> <strong>{commandeDetaillee.dateEntree}</strong></p>
                  <p><span className="text-slate-500">Date prévue:</span> <strong>{commandeDetaillee.datePrevue}</strong></p>
                  <p><span className="text-slate-500">Dernier envoi:</span> {commandeDetaillee.dateDernierEnvoi || 'Jamais'}</p>
                </div>
              </div>
            </div>

            {/* Détails techniques */}
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <Icon name="tool" size={18}/>
                Détails techniques
              </h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <p><span className="text-slate-500">Service:</span> <span className={`px-2 py-1 rounded ${getServiceCouleur(commandeDetaillee.service)}`}>{commandeDetaillee.service}</span></p>
                <p><span className="text-slate-500">Pieds linéaires:</span> <strong>{commandeDetaillee.details.piedsLineaires}</strong></p>
                <p><span className="text-slate-500">Modèle:</span> <strong>{commandeDetaillee.details.modele}</strong></p>
                <p><span className="text-slate-500">Couleur:</span> <strong>{commandeDetaillee.details.couleur}</strong></p>
              </div>
            </div>

            {/* Statut de progression */}
            <div className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-3">Progression</h3>
              <div className="grid grid-cols-5 gap-2 text-center text-sm">
                <div className={`p-3 rounded-lg ${commandeDetaillee.mesure === '√' ? 'bg-green-100 text-green-800' : commandeDetaillee.mesure === 'At.C' ? 'bg-sky-100 text-sky-800' : 'bg-slate-100'}`}>
                  <p className="font-semibold">Mesure</p>
                  <p className="text-lg">{commandeDetaillee.mesure || '-'}</p>
                </div>
                <div className={`p-3 rounded-lg ${commandeDetaillee.plan === '√' ? 'bg-green-100 text-green-800' : commandeDetaillee.plan === 'N/A' ? 'bg-slate-200' : 'bg-slate-100'}`}>
                  <p className="font-semibold">Plan</p>
                  <p className="text-lg">{commandeDetaillee.plan || '-'}</p>
                </div>
                <div className={`p-3 rounded-lg ${commandeDetaillee.envoyeProduction === '√' ? 'bg-green-100 text-green-800' : commandeDetaillee.envoyeProduction === 'N/A' ? 'bg-slate-200' : 'bg-slate-100'}`}>
                  <p className="font-semibold">Envoyé Prod.</p>
                  <p className="text-lg">{commandeDetaillee.envoyeProduction || '-'}</p>
                </div>
                <div className={`p-3 rounded-lg ${commandeDetaillee.productionTerminee === '√' ? 'bg-green-100 text-green-800' : commandeDetaillee.productionTerminee === 'N/A' ? 'bg-slate-200' : 'bg-slate-100'}`}>
                  <p className="font-semibold">Prod. Terminée</p>
                  <p className="text-lg">{commandeDetaillee.productionTerminee || '-'}</p>
                </div>
                <div className={`p-3 rounded-lg ${commandeDetaillee.termine === '√' ? 'bg-green-100 text-green-800' : commandeDetaillee.termine === 'At.C' ? 'bg-sky-100 text-sky-800' : 'bg-slate-100'}`}>
                  <p className="font-semibold">Terminé</p>
                  <p className="text-lg">{commandeDetaillee.termine || '-'}</p>
                </div>
              </div>
            </div>

            {/* Notes */}
            {commandeDetaillee.notes && (
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                  <Icon name="file" size={18}/>
                  Notes
                </h3>
                <p className="text-sm text-slate-700 whitespace-pre-line">{commandeDetaillee.notes}</p>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${commandeDetaillee.attenteEnvoyee ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                {commandeDetaillee.attenteEnvoyee ? '✓ Envoyée' : '⏳ Non envoyée'}
              </span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => {
                  envoyerAttentesRepresentant(commandeDetaillee.representant);
                  setShowDetailModal(false);
                }}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-2"
              >
                <Icon name="mail" size={16}/>
                Envoyer au représentant
              </button>
              <button 
                onClick={() => setShowDetailModal(false)}
                className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Modal de confirmation d'envoi
  const ConfirmEnvoiModal = () => {
    if (!showConfirmEnvoi) return null;

    const representantsAvecAttentes = [...new Set(
      (selectedRepresentants.length > 0 ? commandesFiltrees : commandesEnAttente)
        .map(cmd => cmd.representant)
    )];

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Confirmer l'envoi</h2>
          
          <p className="text-slate-600 mb-4">
            Vous allez envoyer les attentes à {representantsAvecAttentes.length} représentant(s):
          </p>
          
          <ul className="bg-slate-50 rounded-lg p-4 mb-6 space-y-2">
            {representantsAvecAttentes.map(rep => {
              const repInfo = representantsList.find(r => r.initiales === rep);
              const nbAttentes = (selectedRepresentants.length > 0 ? commandesFiltrees : commandesEnAttente)
                .filter(cmd => cmd.representant === rep).length;
              return (
                <li key={rep} className="flex justify-between items-center text-sm">
                  <span><strong>{repInfo?.nom || rep}</strong> ({repInfo?.email})</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{nbAttentes} attente(s)</span>
                </li>
              );
            })}
          </ul>
          
          <div className="flex justify-end gap-3">
            <button 
              onClick={() => setShowConfirmEnvoi(false)}
              className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              Annuler
            </button>
            <button 
              onClick={() => {
                if (selectedRepresentants.length > 0) {
                  selectedRepresentants.forEach(rep => envoyerAttentesRepresentant(rep));
                  alert(`✅ Emails envoyés à ${selectedRepresentants.length} représentant(s)`);
                } else {
                  envoyerToutesAttentes();
                }
                setShowConfirmEnvoi(false);
              }}
              className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg flex items-center gap-2"
            >
              <Icon name="mail" size={16}/>
              Confirmer l'envoi
            </button>
          </div>
        </div>
      </div>
    );
  };

  // === RENDU PRINCIPAL ===
  return (
    <div className="space-y-4">
      {/* Modals */}
      <DetailCommandeModal />
      <ConfirmEnvoiModal />

      {/* Header */}
      <div className="bg-slate-800 rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 text-white hover:bg-slate-700 rounded-lg">
            <Icon name="chevron-left" size={28}/>
          </button>
          <h1 className="text-3xl font-bold text-white">ATTENTES</h1>
        </div>
        
        {/* Statistiques */}
        <div className="flex items-center gap-4 text-white text-sm">
          <div className="text-right">
            <p className="text-slate-400">Commandes en attentes</p>
            <p className="text-2xl font-bold text-blue-400">{commandesFiltrees.length}</p>
          </div>
          <div className="text-right">
            <p className="text-slate-400">Commandes totales</p>
            <p className="text-2xl font-bold">{stats.commandesTotales}</p>
          </div>
        </div>
      </div>

      {/* Barre de filtres et actions */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Filtre par représentant */}
        <div className="relative">
          <div className="flex items-center gap-2">
            {/* Tags des représentants sélectionnés */}
            {selectedRepresentants.map(rep => (
              <span key={rep} className="flex items-center gap-1 bg-slate-200 px-3 py-1 rounded-lg text-sm">
                {rep}
                <button onClick={() => retirerRepresentant(rep)} className="hover:text-red-600">
                  <Icon name="x" size={14}/>
                </button>
              </span>
            ))}
            
            {/* Dropdown de sélection */}
            <div className="relative">
              <button 
                onClick={() => setShowRepresentantDropdown(!showRepresentantDropdown)}
                className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg bg-white hover:bg-slate-50"
              >
                <span className="text-sm text-slate-600">Rechercher des représentants</span>
                <Icon name="chevron-down" size={16}/>
              </button>
              
              {showRepresentantDropdown && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg z-20 min-w-[280px]">
                  {representantsList.map(rep => (
                    <button
                      key={rep.id}
                      onClick={() => {
                        toggleRepresentant(rep.initiales);
                        setShowRepresentantDropdown(false);
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-slate-50 flex items-center justify-between ${
                        selectedRepresentants.includes(rep.initiales) ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div>
                        <p className="font-semibold">{rep.initiales}</p>
                        <p className="text-sm text-slate-500">{rep.email}</p>
                      </div>
                      <span className="text-xs bg-slate-100 px-2 py-1 rounded">
                        {getAttentesParRepresentant(rep.initiales)} attente(s)
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bouton d'envoi et options */}
        <div className="flex items-center gap-4">
          {/* Option envoi automatique */}
          <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
            <input 
              type="checkbox"
              checked={envoiAutoLundi}
              onChange={(e) => setEnvoiAutoLundi(e.target.checked)}
              className="w-4 h-4 rounded"
            />
            <Icon name="mail" size={14}/>
            Envoi auto. chaque lundi
          </label>
          
          {/* Bouton d'envoi */}
          <button 
            onClick={() => setShowConfirmEnvoi(true)}
            className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg flex items-center gap-2 shadow-lg"
          >
            <Icon name="mail" size={18}/>
            Envoie des attentes client aux représentants
          </button>
        </div>
      </div>

      {/* Tableau des attentes */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700"># Projet</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Rep</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Client</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700">Date d'entrée<br/>Date prévue</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700">Service</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700">Mesure</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700">Plan</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700">Envoyé en<br/>Production</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700">Production<br/>terminée</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700">Terminé</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700">Date du<br/>dernier envoi</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {commandesFiltrees.map(cmd => (
                <tr 
                  key={cmd.id} 
                  className="hover:bg-slate-50 cursor-pointer"
                  onClick={() => ouvrirDetail(cmd)}
                >
                  <td className="px-4 py-3 font-bold text-slate-800">{cmd.numProjet}</td>
                  <td className="px-4 py-3 font-semibold">{cmd.representant}</td>
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium">{cmd.client}</p>
                      {cmd.notes && (
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">{cmd.notes.split('\n')[0]}</p>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="inline-block border border-slate-300 rounded overflow-hidden">
                      <div className="px-3 py-1 bg-white font-medium">{cmd.dateEntree}</div>
                      <div className="px-3 py-1 bg-slate-50 text-slate-600">{cmd.datePrevue}</div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-3 py-1 rounded text-xs font-bold ${getServiceCouleur(cmd.service)}`}>
                      {cmd.service}
                    </span>
                  </td>
                  <td className={`px-4 py-3 text-center font-semibold ${getStatutCouleur(cmd.mesure)}`}>
                    {cmd.mesure || '-'}
                  </td>
                  <td className={`px-4 py-3 text-center font-semibold ${getStatutCouleur(cmd.plan)}`}>
                    {cmd.plan || '-'}
                  </td>
                  <td className={`px-4 py-3 text-center font-semibold ${getStatutCouleur(cmd.envoyeProduction)}`}>
                    {cmd.envoyeProduction || '-'}
                  </td>
                  <td className={`px-4 py-3 text-center font-semibold ${getStatutCouleur(cmd.productionTerminee)}`}>
                    {cmd.productionTerminee || '-'}
                  </td>
                  <td className={`px-4 py-3 text-center font-semibold ${getStatutCouleur(cmd.termine)}`}>
                    {cmd.termine || '-'}
                  </td>
                  <td className="px-4 py-3 text-center text-slate-600">
                    {cmd.dateDernierEnvoi || '-'}
                  </td>
                  <td className="px-4 py-3 text-center" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => {
                        if (!cmd.attenteEnvoyee) {
                          envoyerAttentesRepresentant(cmd.representant);
                        }
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                        cmd.attenteEnvoyee 
                          ? 'bg-green-100 text-green-800 cursor-default' 
                          : 'bg-orange-400 text-white hover:bg-orange-500 cursor-pointer'
                      }`}
                    >
                      {cmd.attenteEnvoyee ? '✓ Envoyée' : 'Envoyer'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {commandesFiltrees.length === 0 && (
          <div className="p-12 text-center">
            <Icon name="inbox" size={48} className="mx-auto mb-4 text-slate-300"/>
            <p className="text-slate-500">Aucune commande en attente pour ce(s) représentant(s)</p>
          </div>
        )}
      </div>

      {/* Légende */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <p className="text-sm font-semibold text-slate-600 mb-3">Légende:</p>
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold">√</span>
            <span className="text-slate-600">Complété</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-sky-200 text-sky-800 px-2 py-0.5 rounded text-xs font-bold">At.C</span>
            <span className="text-slate-600">Attente Client</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-semibold">N/A</span>
            <span className="text-slate-600">Non applicable</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-bold">✓ Envoyée</span>
            <span className="text-slate-600">Attente envoyée par email</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-orange-400 text-white px-2 py-0.5 rounded text-xs font-bold">Envoyer</span>
            <span className="text-slate-600">Attente non envoyée</span>
          </div>
        </div>
      </div>
    </div>
  );
};



  // === NON-CONFORMITÉS ===


const ncTypeColors = {
  Commande: "border-l-blue-500",
  Livraison: "border-l-amber-500",
  Cueillette: "border-l-purple-500",
  Transport: "border-l-orange-500"
};

const NonConformites = () => {
  const [nonConformites, setNonConformites] = useState([]);
  const [showNCForm, setShowNCForm] = useState(false);
  const [selectedNC, setSelectedNC] = useState(null);

  const [newNC, setNewNC] = useState({
    commande: "",
    typeCommande: "Standard",
    typeNC: "Commande",
    titre: "",
    description: "",
    date: "",
    departement: "Production",
    gravite: "Mineure",
    responsable: "",
    cout: ""
  });

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Non-conformités</h1>
          <p className="text-slate-500 mt-1">Suivi des erreurs internes</p>
        </div>
        <button
          onClick={() => setShowNCForm(true)}
          className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg"
        >
          + Signaler NC
        </button>
      </div>

      {/* DASHBOARD PAR DÉPARTEMENT (INCHANGÉ) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {["Ventes", "Production", "Installation", "Logistique"].map(dep => (
          <div key={dep} className="bg-white p-4 rounded-xl border border-slate-100">
            <p className="text-sm text-slate-500">{dep}</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">
              {nonConformites.filter(nc => nc.departement === dep).length}
            </p>
          </div>
        ))}
      </div>

      {/* TABLEAU DES NON-CONFORMITÉS */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 divide-y divide-slate-100">
        {nonConformites.map(nc => (
          <div
            key={nc.id}
            onClick={() => setSelectedNC(nc)}
            className={`p-4 hover:bg-slate-50 cursor-pointer border-l-4 ${ncTypeColors[nc.typeNC]}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono font-medium text-slate-800">
                    {nc.commande}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                    nc.statut === "Ouvert"
                      ? "bg-red-100 text-red-800"
                      : "bg-emerald-100 text-emerald-800"
                  }`}>
                    {nc.statut}
                  </span>
                  <span className="text-xs text-slate-500">
                    {nc.typeNC}
                  </span>
                </div>
                <p className="font-semibold text-slate-700 mt-1">
                  {nc.titre}
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  Département : {nc.departement} • Gravité : {nc.gravite}
                </p>
              </div>
              <span className="text-sm text-slate-500">{nc.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL AJOUT NC */}
      {showNCForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-3xl space-y-4">
            <h2 className="text-xl font-bold">Signaler une non-conformité</h2>

            <div className="grid grid-cols-2 gap-4">
              <input className="input" placeholder="Numéro de commande"
                onChange={e => setNewNC({...newNC, commande: e.target.value})} />

              <select className="input"
                onChange={e => setNewNC({...newNC, typeCommande: e.target.value})}>
                <option>Standard</option>
                <option>Commercial</option>
                <option>Multi-phase</option>
                <option>Multi-plan</option>
              </select>

              <select className="input"
                onChange={e => setNewNC({...newNC, typeNC: e.target.value})}>
                <option>Commande</option>
                <option>Livraison</option>
                <option>Cueillette</option>
                <option>Transport</option>
              </select>

              <select className="input"
                onChange={e => setNewNC({...newNC, departement: e.target.value})}>
                <option>Ventes</option>
                <option>Production</option>
                <option>Installation</option>
                <option>Logistique</option>
              </select>

              <input type="date" className="input"
                onChange={e => setNewNC({...newNC, date: e.target.value})} />

              <select className="input"
                onChange={e => setNewNC({...newNC, gravite: e.target.value})}>
                <option>Mineure</option>
                <option>Majeure</option>
                <option>Critique</option>
              </select>

              <input className="input" placeholder="Responsable"
                onChange={e => setNewNC({...newNC, responsable: e.target.value})} />

              <input className="input" placeholder="Coût estimé ($)"
                onChange={e => setNewNC({...newNC, cout: e.target.value})} />
            </div>

            <input className="input" placeholder="Titre de la non-conformité"
              onChange={e => setNewNC({...newNC, titre: e.target.value})} />

            <textarea className="input" rows={3} placeholder="Description détaillée"
              onChange={e => setNewNC({...newNC, description: e.target.value})} />

            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={() => setShowNCForm(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Annuler
              </button>
              <button
                onClick={() => {
                  setNonConformites(prev => [
                    ...prev,
                    { id: Date.now(), statut: "Ouvert", ...newNC }
                  ]);
                  setShowNCForm(false);
                }}
                className="px-4 py-2 bg-amber-500 text-white rounded-lg"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DÉTAIL NC */}
      {selectedNC && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg space-y-3">
            <h2 className="text-xl font-bold">{selectedNC.titre}</h2>
            <p>{selectedNC.description}</p>
            <p className="text-sm text-slate-500">
              Commande : {selectedNC.commande} ({selectedNC.typeCommande})
            </p>
            <p className="text-sm text-slate-500">
              Département : {selectedNC.departement} • {selectedNC.typeNC}
            </p>
            <p className="text-sm text-slate-500">
              Gravité : {selectedNC.gravite} • Coût : {selectedNC.cout} $
            </p>
            <button
              onClick={() => setSelectedNC(null)}
              className="mt-4 px-4 py-2 border rounded-lg"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

    </div>
  );
};


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
  // === MODULE REPRISES ===
// Remplacer le GenericScreen pour 'reprises' dans le router par: case 'reprises': return <Reprises />;

const Reprises = () => {
  const [onglet, setOnglet] = useState('actives'); // actives, historique, statistiques, conseils

  // === ÉQUIPES ===
  const equipes = [
    'Équipe Installation A',
    'Équipe Installation B',
    'Équipe Production Aluminium',
    'Équipe Production Verre',
    'Équipe Livraison',
    'Équipe Mesure',
  ];

  // === TYPES DE REPRISES ===
  const typesReprise = [
    'Erreur de mesure',
    'Défaut de matériau',
    'Mauvaise coupe',
    'Problème d\'installation',
    'Non-conformité client',
    'Dommage en transport',
    'Erreur de couleur',
    'Pièce manquante',
    'Défaut de soudure',
    'Mauvais alignement',
    'Autre',
  ];

  const priorites = ['Haute', 'Moyenne', 'Basse'];
  const statutsReprise = ['Planifiée', 'En cours', 'En attente de pièces', 'Complétée'];

  // === DONNÉES DE REPRISES ACTIVES ===
  const [reprisesData, setReprisesData] = useState([
    {
      id: 1, numCommande: '250927', client: 'Steve Boucher', ville: 'Beauport',
      equipe: 'Équipe Installation A', typeReprise: 'Erreur de mesure',
      raison: 'Mesure du garde-corps non conforme, écart de 2cm sur la longueur totale',
      dateReprise: '2026-01-28', dateOrigine: '2026-01-15', nombreReprises: 1,
      statut: 'En cours', priorite: 'Haute', notes: 'Client mécontent, à prioriser',
      service: 'Installation', completee: false, dateCompletion: '',
      coutEstime: 450, tempsEstime: '3h', responsable: 'Martin Gagnon'
    },
    {
      id: 2, numCommande: '251158', client: 'Steve Boucher', ville: 'Beauport',
      equipe: 'Équipe Production Verre', typeReprise: 'Défaut de matériau',
      raison: 'Verre trempé fissuré à la livraison, possible choc thermique en production',
      dateReprise: '2026-01-30', dateOrigine: '2026-01-18', nombreReprises: 1,
      statut: 'En attente de pièces', priorite: 'Haute', notes: 'Nouveau verre commandé chez fournisseur',
      service: 'Livraison', completee: false, dateCompletion: '',
      coutEstime: 680, tempsEstime: '2h', responsable: 'Jean-Pierre Roy'
    },
    {
      id: 3, numCommande: '250647', client: 'CONSTRUCTION GOSCO', ville: 'St-Raymond',
      equipe: 'Équipe Installation B', typeReprise: 'Problème d\'installation',
      raison: 'Poteaux non alignés avec la structure du balcon, nécessite réajustement complet',
      dateReprise: '2026-02-01', dateOrigine: '2026-01-25', nombreReprises: 2,
      statut: 'Planifiée', priorite: 'Moyenne', notes: 'Deuxième reprise - vérifier structure avant intervention',
      service: 'Installation', completee: false, dateCompletion: '',
      coutEstime: 1200, tempsEstime: '6h', responsable: 'Luc Tremblay'
    },
    {
      id: 4, numCommande: '250683', client: 'Marcel Lebreton', ville: 'Québec',
      equipe: 'Équipe Mesure', typeReprise: 'Erreur de mesure',
      raison: 'Dimensions erronées transmises à la production, escalier mal mesuré',
      dateReprise: '2026-01-27', dateOrigine: '2026-01-20', nombreReprises: 1,
      statut: 'En cours', priorite: 'Haute', notes: 'Remesure effectuée le 26 janvier',
      service: 'Installation', completee: false, dateCompletion: '',
      coutEstime: 350, tempsEstime: '4h', responsable: 'André Simard'
    },
    {
      id: 5, numCommande: '250100', client: 'Const. Couture & Tanguay', ville: 'Beauport',
      equipe: 'Équipe Production Aluminium', typeReprise: 'Mauvaise coupe',
      raison: 'Limon coupé 5mm trop court, ne s\'ajuste pas au support',
      dateReprise: '2026-02-02', dateOrigine: '2026-01-15', nombreReprises: 1,
      statut: 'En cours', priorite: 'Moyenne', notes: '',
      service: 'Installation', completee: false, dateCompletion: '',
      coutEstime: 280, tempsEstime: '2h', responsable: 'Pierre Lavoie'
    },
    {
      id: 6, numCommande: '250062-3', client: 'Drolet construction', ville: 'Lévis',
      equipe: 'Équipe Livraison', typeReprise: 'Dommage en transport',
      raison: 'Rampe aluminium endommagée pendant le transport, égratignures profondes',
      dateReprise: '2026-02-01', dateOrigine: '2026-01-28', nombreReprises: 1,
      statut: 'Planifiée', priorite: 'Basse', notes: 'Revoir emballage pour ce type de pièce',
      service: 'Livraison', completee: false, dateCompletion: '',
      coutEstime: 520, tempsEstime: '1.5h', responsable: 'François Dubé'
    },
    {
      id: 7, numCommande: '250890', client: 'Habitations Pelletier', ville: 'Lévis',
      equipe: 'Équipe Installation A', typeReprise: 'Erreur de couleur',
      raison: 'Couleur noir mat installée au lieu de noir brillant, commande mal lue',
      dateReprise: '2026-01-29', dateOrigine: '2026-01-10', nombreReprises: 1,
      statut: 'En attente de pièces', priorite: 'Moyenne', notes: 'Pièces en peinture noir brillant commandées',
      service: 'Installation', completee: false, dateCompletion: '',
      coutEstime: 890, tempsEstime: '5h', responsable: 'Martin Gagnon'
    },
    {
      id: 8, numCommande: '250745', client: 'Rénovations Plus', ville: 'Québec',
      equipe: 'Équipe Production Aluminium', typeReprise: 'Défaut de soudure',
      raison: 'Soudure du coin du cadre insuffisante, risque structural',
      dateReprise: '2026-02-02', dateOrigine: '2026-01-22', nombreReprises: 1,
      statut: 'En cours', priorite: 'Haute', notes: 'Vérifier tous les cadres du même lot',
      service: 'Installation', completee: false, dateCompletion: '',
      coutEstime: 320, tempsEstime: '2.5h', responsable: 'Pierre Lavoie'
    },
  ]);

  // === HISTORIQUE DES REPRISES COMPLÉTÉES ===
  const [historiqueReprises, setHistoriqueReprises] = useState([
    {
      id: 100, numCommande: '241088', client: 'Les Projets Meraki', ville: 'Québec',
      equipe: 'Équipe Installation A', typeReprise: 'Problème d\'installation',
      raison: 'Fixation murale insuffisante, garde-corps instable',
      dateReprise: '2025-12-10', dateOrigine: '2025-11-20', nombreReprises: 1,
      statut: 'Complétée', priorite: 'Haute', notes: 'Résolu avec ancrages chimiques',
      service: 'Installation', completee: true, dateCompletion: '2025-12-15',
      coutEstime: 380, tempsEstime: '3h', responsable: 'Martin Gagnon'
    },
    {
      id: 101, numCommande: '250050', client: 'Habitations Lévis', ville: 'Lévis',
      equipe: 'Équipe Mesure', typeReprise: 'Erreur de mesure',
      raison: 'Mesure de l\'escalier incorrecte, pente non prise en compte',
      dateReprise: '2025-12-18', dateOrigine: '2025-12-01', nombreReprises: 2,
      statut: 'Complétée', priorite: 'Haute', notes: 'Deuxième erreur de mesure sur ce projet',
      service: 'Installation', completee: true, dateCompletion: '2025-12-28',
      coutEstime: 750, tempsEstime: '5h', responsable: 'André Simard'
    },
    {
      id: 102, numCommande: '241200', client: 'Const. Beaurivage', ville: 'St-Nicolas',
      equipe: 'Équipe Installation B', typeReprise: 'Mauvais alignement',
      raison: 'Barrotins mal alignés, espacement irrégulier',
      dateReprise: '2026-01-05', dateOrigine: '2025-12-15', nombreReprises: 1,
      statut: 'Complétée', priorite: 'Moyenne', notes: '',
      service: 'Installation', completee: true, dateCompletion: '2026-01-10',
      coutEstime: 200, tempsEstime: '2h', responsable: 'Luc Tremblay'
    },
    {
      id: 103, numCommande: '241055', client: 'Domaine des Cèdres', ville: 'Ste-Foy',
      equipe: 'Équipe Production Verre', typeReprise: 'Défaut de matériau',
      raison: 'Verre non conforme aux normes, bulles visibles',
      dateReprise: '2025-11-20', dateOrigine: '2025-11-05', nombreReprises: 1,
      statut: 'Complétée', priorite: 'Haute', notes: 'Fournisseur avisé',
      service: 'Livraison', completee: true, dateCompletion: '2025-12-01',
      coutEstime: 920, tempsEstime: '3h', responsable: 'Jean-Pierre Roy'
    },
    {
      id: 104, numCommande: '250010', client: 'Immeubles Trudel', ville: 'Lévis',
      equipe: 'Équipe Livraison', typeReprise: 'Dommage en transport',
      raison: 'Panneau de verre cassé lors du déchargement',
      dateReprise: '2026-01-12', dateOrigine: '2026-01-05', nombreReprises: 1,
      statut: 'Complétée', priorite: 'Haute', notes: 'Formation transport effectuée',
      service: 'Livraison', completee: true, dateCompletion: '2026-01-20',
      coutEstime: 1100, tempsEstime: '2h', responsable: 'François Dubé'
    },
    {
      id: 105, numCommande: '241150', client: 'Gestion Immo Capitale', ville: 'Québec',
      equipe: 'Équipe Installation A', typeReprise: 'Pièce manquante',
      raison: 'Capuchons de poteaux manquants, oubli en production',
      dateReprise: '2025-10-15', dateOrigine: '2025-10-01', nombreReprises: 1,
      statut: 'Complétée', priorite: 'Basse', notes: '',
      service: 'Installation', completee: true, dateCompletion: '2025-10-20',
      coutEstime: 80, tempsEstime: '1h', responsable: 'Martin Gagnon'
    },
    {
      id: 106, numCommande: '241300', client: 'Les Habitations du Fleuve', ville: 'Lévis',
      equipe: 'Équipe Production Aluminium', typeReprise: 'Mauvaise coupe',
      raison: 'Main courante coupée trop longue de 8mm',
      dateReprise: '2025-11-02', dateOrigine: '2025-10-20', nombreReprises: 1,
      statut: 'Complétée', priorite: 'Moyenne', notes: '',
      service: 'Installation', completee: true, dateCompletion: '2025-11-05',
      coutEstime: 150, tempsEstime: '1.5h', responsable: 'Pierre Lavoie'
    },
    {
      id: 107, numCommande: '250200', client: 'Maison Bonneau', ville: 'Charlesbourg',
      equipe: 'Équipe Mesure', typeReprise: 'Erreur de mesure',
      raison: 'Hauteur du garde-corps mesurée depuis le mauvais point de référence',
      dateReprise: '2026-01-20', dateOrigine: '2026-01-08', nombreReprises: 1,
      statut: 'Complétée', priorite: 'Haute', notes: '',
      service: 'Installation', completee: true, dateCompletion: '2026-01-25',
      coutEstime: 400, tempsEstime: '3h', responsable: 'André Simard'
    },
  ]);

  // === FILTRES ===
  const [recherche, setRecherche] = useState('');
  const [filtreEquipe, setFiltreEquipe] = useState('');
  const [filtreType, setFiltreType] = useState('');
  const [filtrePriorite, setFiltrePriorite] = useState('');
  const [filtreStatut, setFiltreStatut] = useState('');
  const [filtrePeriode, setFiltrePeriode] = useState('tout'); // jour, semaine, mois, annee, tout
  const [filtreAnnee, setFiltreAnnee] = useState(new Date().getFullYear());

  // === MODALS ===
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [repriseSelectionnee, setRepriseSelectionnee] = useState(null);
  const [showAjouterModal, setShowAjouterModal] = useState(false);
  const [showConfirmComplete, setShowConfirmComplete] = useState(false);
  const [repriseACompleter, setRepriseACompleter] = useState(null);
  const [showModifierModal, setShowModifierModal] = useState(false);
  const [repriseEnEdition, setRepriseEnEdition] = useState(null);

  // Formulaire nouvelle reprise
  const [nouvelleReprise, setNouvelleReprise] = useState({
    numCommande: '', client: '', ville: '', equipe: '', typeReprise: '',
    raison: '', dateReprise: new Date().toISOString().split('T')[0],
    dateOrigine: '', nombreReprises: 1, statut: 'Planifiée', priorite: 'Moyenne',
    notes: '', service: 'Installation', completee: false, dateCompletion: '',
    coutEstime: 0, tempsEstime: '', responsable: ''
  });

  // ============================================================
  // FONCTIONS UTILITAIRES
  // ============================================================
  const formaterDate = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('fr-CA', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const formaterDateCourte = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('fr-CA');
  };

  const isAujourdhui = (dateStr) => {
    if (!dateStr) return false;
    const d = new Date(dateStr);
    const now = new Date();
    return d.toDateString() === now.toDateString();
  };

  const isCetteSemaine = (dateStr) => {
    if (!dateStr) return false;
    const d = new Date(dateStr);
    const now = new Date();
    const debutSemaine = new Date(now);
    debutSemaine.setDate(now.getDate() - now.getDay());
    debutSemaine.setHours(0,0,0,0);
    const finSemaine = new Date(debutSemaine);
    finSemaine.setDate(debutSemaine.getDate() + 7);
    return d >= debutSemaine && d < finSemaine;
  };

  const isCeMois = (dateStr) => {
    if (!dateStr) return false;
    const d = new Date(dateStr);
    const now = new Date();
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  };

  const isCetteAnnee = (dateStr) => {
    if (!dateStr) return false;
    return new Date(dateStr).getFullYear() === new Date().getFullYear();
  };

  const isAnnee = (dateStr, annee) => {
    if (!dateStr) return false;
    return new Date(dateStr).getFullYear() === annee;
  };

  const getPrioriteCouleur = (p) => {
    switch(p) {
      case 'Haute': return 'bg-red-100 text-red-800 border-red-300';
      case 'Moyenne': return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'Basse': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const getStatutCouleur = (s) => {
    switch(s) {
      case 'Complétée': return 'bg-emerald-100 text-emerald-800';
      case 'En cours': return 'bg-blue-100 text-blue-800';
      case 'Planifiée': return 'bg-purple-100 text-purple-800';
      case 'En attente de pièces': return 'bg-amber-100 text-amber-800';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const getTypeCouleur = (t) => {
    switch(t) {
      case 'Erreur de mesure': return 'bg-red-500 text-white';
      case 'Défaut de matériau': return 'bg-orange-500 text-white';
      case 'Mauvaise coupe': return 'bg-amber-500 text-white';
      case 'Problème d\'installation': return 'bg-blue-500 text-white';
      case 'Non-conformité client': return 'bg-purple-500 text-white';
      case 'Dommage en transport': return 'bg-slate-600 text-white';
      case 'Erreur de couleur': return 'bg-pink-500 text-white';
      case 'Pièce manquante': return 'bg-teal-500 text-white';
      case 'Défaut de soudure': return 'bg-rose-600 text-white';
      case 'Mauvais alignement': return 'bg-indigo-500 text-white';
      default: return 'bg-slate-400 text-white';
    }
  };

  // ============================================================
  // FILTRAGE
  // ============================================================
  const toutesReprises = [...reprisesData, ...historiqueReprises];

  const filtrerParPeriode = (data) => {
    switch(filtrePeriode) {
      case 'jour': return data.filter(r => isAujourdhui(r.dateReprise));
      case 'semaine': return data.filter(r => isCetteSemaine(r.dateReprise));
      case 'mois': return data.filter(r => isCeMois(r.dateReprise));
      case 'annee': return data.filter(r => isCetteAnnee(r.dateReprise));
      default: return data;
    }
  };

  const filtrerReprises = (data) => {
    return data.filter(r => {
      const matchRecherche = !recherche ||
        r.numCommande.toLowerCase().includes(recherche.toLowerCase()) ||
        r.client.toLowerCase().includes(recherche.toLowerCase()) ||
        r.raison.toLowerCase().includes(recherche.toLowerCase());
      const matchEquipe = !filtreEquipe || r.equipe === filtreEquipe;
      const matchType = !filtreType || r.typeReprise === filtreType;
      const matchPriorite = !filtrePriorite || r.priorite === filtrePriorite;
      const matchStatut = !filtreStatut || r.statut === filtreStatut;
      return matchRecherche && matchEquipe && matchType && matchPriorite && matchStatut;
    });
  };

  const reprisesActivesFiltrees = filtrerParPeriode(filtrerReprises(reprisesData));
  const historiqueFiltree = filtrerReprises(historiqueReprises);

  // ============================================================
  // STATISTIQUES
  // ============================================================

  // Stats globales
  const totalReprisesActives = reprisesData.length;
  const totalHistorique = historiqueReprises.length;
  const totalToutes = totalReprisesActives + totalHistorique;
  const coutTotalActif = reprisesData.reduce((s, r) => s + r.coutEstime, 0);
  const coutTotalHistorique = historiqueReprises.reduce((s, r) => s + r.coutEstime, 0);
  const commandesMultiReprises = toutesReprises.filter(r => r.nombreReprises > 1).length;

  // % reprise par équipe (sur TOUTES les reprises)
  const statsParEquipe = equipes.map(eq => {
    const reprisesEquipe = toutesReprises.filter(r => r.equipe === eq);
    const total = reprisesEquipe.length;
    const pourcentage = totalToutes > 0 ? ((total / totalToutes) * 100).toFixed(1) : 0;
    const cout = reprisesEquipe.reduce((s, r) => s + r.coutEstime, 0);
    const actives = reprisesData.filter(r => r.equipe === eq).length;
    const completees = historiqueReprises.filter(r => r.equipe === eq).length;
    return { equipe: eq, total, pourcentage, cout, actives, completees };
  }).sort((a, b) => b.total - a.total);

  // Stats par type
  const statsParType = typesReprise.map(t => {
    const count = toutesReprises.filter(r => r.typeReprise === t).length;
    return { type: t, count, pourcentage: totalToutes > 0 ? ((count / totalToutes) * 100).toFixed(1) : 0 };
  }).filter(s => s.count > 0).sort((a, b) => b.count - a.count);

  // Stats par période
  const statsJour = toutesReprises.filter(r => isAujourdhui(r.dateReprise)).length;
  const statsSemaine = toutesReprises.filter(r => isCetteSemaine(r.dateReprise)).length;
  const statsMois = toutesReprises.filter(r => isCeMois(r.dateReprise)).length;
  const statsAnneeEnCours = toutesReprises.filter(r => isCetteAnnee(r.dateReprise)).length;
  const statsAnneePrecedente = toutesReprises.filter(r => isAnnee(r.dateReprise, new Date().getFullYear() - 1)).length;

  // Bilan annuel
  const anneesDisponibles = [...new Set(toutesReprises.map(r => new Date(r.dateReprise).getFullYear()))].sort((a,b) => b - a);
  const bilanAnnuel = anneesDisponibles.map(annee => {
    const reprisesAnnee = toutesReprises.filter(r => isAnnee(r.dateReprise, annee));
    const cout = reprisesAnnee.reduce((s, r) => s + r.coutEstime, 0);
    const parEquipe = equipes.map(eq => ({
      equipe: eq,
      count: reprisesAnnee.filter(r => r.equipe === eq).length
    })).filter(e => e.count > 0);
    const parType = typesReprise.map(t => ({
      type: t,
      count: reprisesAnnee.filter(r => r.typeReprise === t).length
    })).filter(t => t.count > 0).sort((a,b) => b.count - a.count);
    return { annee, total: reprisesAnnee.length, cout, parEquipe, parType };
  });

  // Stats pour une commande spécifique (quand on filtre par commande)
  const getStatsCommande = (numCommande) => {
    const reprises = toutesReprises.filter(r => r.numCommande === numCommande);
    if (reprises.length === 0) return null;
    return {
      numCommande,
      client: reprises[0].client,
      totalReprises: reprises.length,
      nombreMaxReprises: Math.max(...reprises.map(r => r.nombreReprises)),
      coutTotal: reprises.reduce((s, r) => s + r.coutEstime, 0),
      equipesImpliquees: [...new Set(reprises.map(r => r.equipe))],
      typesImpliques: [...new Set(reprises.map(r => r.typeReprise))],
      reprises
    };
  };

  // Stats commande filtrée (si recherche = numéro de commande exact)
  const commandeRecherchee = recherche ? getStatsCommande(recherche) : null;

  // ============================================================
  // CRUD
  // ============================================================
  const ajouterReprise = () => {
    if (!nouvelleReprise.numCommande || !nouvelleReprise.client || !nouvelleReprise.equipe || !nouvelleReprise.typeReprise) {
      alert('# Commande, Client, Équipe et Type de reprise sont requis');
      return;
    }
    setReprisesData([...reprisesData, { id: Date.now(), ...nouvelleReprise }]);
    setNouvelleReprise({
      numCommande: '', client: '', ville: '', equipe: '', typeReprise: '',
      raison: '', dateReprise: new Date().toISOString().split('T')[0],
      dateOrigine: '', nombreReprises: 1, statut: 'Planifiée', priorite: 'Moyenne',
      notes: '', service: 'Installation', completee: false, dateCompletion: '',
      coutEstime: 0, tempsEstime: '', responsable: ''
    });
    setShowAjouterModal(false);
  };

  const modifierReprise = () => {
    if (!repriseEnEdition) return;
    setReprisesData(reprisesData.map(r => r.id === repriseEnEdition.id ? repriseEnEdition : r));
    setShowModifierModal(false);
    setRepriseEnEdition(null);
  };

  const supprimerReprise = (id) => {
    if (window.confirm('Supprimer cette reprise ?')) {
      setReprisesData(reprisesData.filter(r => r.id !== id));
    }
  };

  const completerReprise = (reprise) => {
    const repriseComplete = {
      ...reprise,
      statut: 'Complétée',
      completee: true,
      dateCompletion: new Date().toISOString().split('T')[0]
    };
    setReprisesData(reprisesData.filter(r => r.id !== reprise.id));
    setHistoriqueReprises([repriseComplete, ...historiqueReprises]);
    setShowConfirmComplete(false);
    setRepriseACompleter(null);
    setShowDetailModal(false);
  };

  // ============================================================
  // COMPOSANTS MODALS
  // ============================================================

  // MODAL DÉTAIL REPRISE
  const DetailModal = () => {
    if (!showDetailModal || !repriseSelectionnee) return null;
    const r = repriseSelectionnee;
    const isHist = r.completee;
    const statsCmd = getStatsCommande(r.numCommande);

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
          <div className="p-5 bg-slate-800 text-white flex items-center justify-between rounded-t-2xl">
            <div>
              <h2 className="text-xl font-bold">Détail reprise - #{r.numCommande}</h2>
              <p className="text-slate-300">{r.client} • {r.ville}</p>
            </div>
            <div className="flex items-center gap-2">
              {r.nombreReprises > 1 && (
                <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-bold">
                  {r.nombreReprises}x reprises
                </span>
              )}
              <button onClick={() => setShowDetailModal(false)} className="p-2 hover:bg-slate-700 rounded-lg">
                <Icon name="x" size={24}/>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {/* Infos principales */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-slate-50 rounded-xl p-3">
                <p className="text-xs text-slate-500">Équipe</p>
                <p className="font-semibold text-sm">{r.equipe}</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-3">
                <p className="text-xs text-slate-500">Responsable</p>
                <p className="font-semibold text-sm">{r.responsable || '—'}</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-3">
                <p className="text-xs text-slate-500">Priorité</p>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPrioriteCouleur(r.priorite)}`}>{r.priorite}</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-3">
                <p className="text-xs text-slate-500">Statut</p>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatutCouleur(r.statut)}`}>{r.statut}</span>
              </div>
            </div>

            {/* Type et raison */}
            <div className="bg-red-50 rounded-xl p-4 border border-red-200">
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 rounded text-xs font-bold ${getTypeCouleur(r.typeReprise)}`}>{r.typeReprise}</span>
                <span className="text-xs text-slate-500">Service: {r.service}</span>
              </div>
              <p className="text-sm text-slate-800 font-medium">{r.raison}</p>
            </div>

            {/* Dates et coût */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-white rounded-xl p-3 border border-slate-200">
                <p className="text-xs text-slate-500">Date commande originale</p>
                <p className="font-medium text-sm">{formaterDate(r.dateOrigine)}</p>
              </div>
              <div className="bg-white rounded-xl p-3 border border-slate-200">
                <p className="text-xs text-slate-500">Date de reprise</p>
                <p className="font-medium text-sm">{formaterDate(r.dateReprise)}</p>
              </div>
              <div className="bg-white rounded-xl p-3 border border-slate-200">
                <p className="text-xs text-slate-500">Coût estimé</p>
                <p className="font-bold text-lg text-red-600">{r.coutEstime.toLocaleString()} $</p>
              </div>
              <div className="bg-white rounded-xl p-3 border border-slate-200">
                <p className="text-xs text-slate-500">Temps estimé</p>
                <p className="font-bold text-lg">{r.tempsEstime || '—'}</p>
              </div>
            </div>

            {r.notes && (
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-1">Notes</h4>
                <p className="text-sm text-slate-700 whitespace-pre-line">{r.notes}</p>
              </div>
            )}

            {isHist && (
              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                <h4 className="font-semibold text-emerald-800 mb-1">✓ Reprise complétée</h4>
                <p className="text-sm text-slate-700">Date de complétion: <strong>{formaterDate(r.dateCompletion)}</strong></p>
              </div>
            )}

            {/* Stats commande */}
            {statsCmd && statsCmd.totalReprises > 1 && (
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-3">📊 Statistiques de la commande #{r.numCommande}</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div><span className="text-slate-500">Total reprises:</span> <strong className="text-red-600">{statsCmd.totalReprises}</strong></div>
                  <div><span className="text-slate-500">Coût total:</span> <strong className="text-red-600">{statsCmd.coutTotal.toLocaleString()} $</strong></div>
                  <div><span className="text-slate-500">Équipes impliquées:</span> <strong>{statsCmd.equipesImpliquees.join(', ')}</strong></div>
                  <div><span className="text-slate-500">Types:</span> <strong>{statsCmd.typesImpliques.join(', ')}</strong></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
            <div>
              {!isHist && (
                <button
                  onClick={() => { setRepriseACompleter(r); setShowConfirmComplete(true); }}
                  className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg flex items-center gap-2"
                >
                  <Icon name="check" size={18}/>Marquer comme complétée
                </button>
              )}
            </div>
            <div className="flex gap-2">
              {!isHist && (
                <button
                  onClick={() => { setRepriseEnEdition({...r}); setShowDetailModal(false); setShowModifierModal(true); }}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-2"
                >
                  <Icon name="edit" size={16}/>Modifier
                </button>
              )}
              <button onClick={() => setShowDetailModal(false)} className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100">
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // MODAL CONFIRMER COMPLÉTION
  const ConfirmCompleteModal = () => {
    if (!showConfirmComplete || !repriseACompleter) return null;
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[60] p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="check" size={32} className="text-emerald-600"/>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Compléter la reprise ?</h3>
          <p className="text-slate-600 mb-2">Commande <strong>#{repriseACompleter.numCommande}</strong> - {repriseACompleter.client}</p>
          <p className="text-sm text-slate-500 mb-6">La reprise sera déplacée dans l'historique.</p>
          <div className="flex justify-center gap-4">
            <button onClick={() => { setShowConfirmComplete(false); setRepriseACompleter(null); }} className="px-6 py-2 border border-slate-300 rounded-lg hover:bg-slate-50">Annuler</button>
            <button onClick={() => completerReprise(repriseACompleter)} className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg">✓ Confirmer</button>
          </div>
        </div>
      </div>
    );
  };

  // MODAL FORMULAIRE (AJOUT / MODIF)
  const RepriseFormModal = ({ show, onClose, reprise, setReprise, onSave, titre }) => {
    if (!show || !reprise) return null;
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
          <div className="p-5 bg-slate-800 text-white rounded-t-2xl">
            <h2 className="text-xl font-bold">{titre}</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1"># Commande *</label>
                <input type="text" value={reprise.numCommande} onChange={(e) => setReprise({...reprise, numCommande: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Client *</label>
                <input type="text" value={reprise.client} onChange={(e) => setReprise({...reprise, client: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Ville</label>
                <input type="text" value={reprise.ville} onChange={(e) => setReprise({...reprise, ville: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Équipe *</label>
                <select value={reprise.equipe} onChange={(e) => setReprise({...reprise, equipe: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg">
                  <option value="">Sélectionner...</option>
                  {equipes.map(eq => <option key={eq} value={eq}>{eq}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Type de reprise *</label>
                <select value={reprise.typeReprise} onChange={(e) => setReprise({...reprise, typeReprise: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg">
                  <option value="">Sélectionner...</option>
                  {typesReprise.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Responsable</label>
                <input type="text" value={reprise.responsable} onChange={(e) => setReprise({...reprise, responsable: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Date commande originale</label>
                <input type="date" value={reprise.dateOrigine} onChange={(e) => setReprise({...reprise, dateOrigine: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Date de reprise</label>
                <input type="date" value={reprise.dateReprise} onChange={(e) => setReprise({...reprise, dateReprise: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Nombre de reprises</label>
                <input type="number" min="1" value={reprise.nombreReprises} onChange={(e) => setReprise({...reprise, nombreReprises: parseInt(e.target.value) || 1})} className="w-full px-3 py-2 border border-slate-300 rounded-lg"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Priorité</label>
                <select value={reprise.priorite} onChange={(e) => setReprise({...reprise, priorite: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg">
                  {priorites.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Statut</label>
                <select value={reprise.statut} onChange={(e) => setReprise({...reprise, statut: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg">
                  {statutsReprise.filter(s => s !== 'Complétée').map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Service</label>
                <select value={reprise.service} onChange={(e) => setReprise({...reprise, service: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg">
                  <option value="Installation">Installation</option>
                  <option value="Livraison">Livraison</option>
                  <option value="Production">Production</option>
                  <option value="Mesure">Mesure</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Coût estimé ($)</label>
                <input type="number" step="0.01" value={reprise.coutEstime} onChange={(e) => setReprise({...reprise, coutEstime: parseFloat(e.target.value) || 0})} className="w-full px-3 py-2 border border-slate-300 rounded-lg"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Temps estimé</label>
                <input type="text" placeholder="ex: 3h" value={reprise.tempsEstime} onChange={(e) => setReprise({...reprise, tempsEstime: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg"/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Raison détaillée</label>
              <textarea value={reprise.raison} onChange={(e) => setReprise({...reprise, raison: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg" rows={2} placeholder="Décrire la raison de la reprise..."/>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Notes</label>
              <textarea value={reprise.notes} onChange={(e) => setReprise({...reprise, notes: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg" rows={2}/>
            </div>
          </div>
          <div className="p-4 border-t border-slate-200 flex justify-end gap-3">
            <button onClick={onClose} className="px-6 py-2 border border-slate-300 rounded-lg hover:bg-slate-50">Annuler</button>
            <button onClick={onSave} className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg">Enregistrer</button>
          </div>
        </div>
      </div>
    );
  };

  // ============================================================
  // TABLEAU DE REPRISES
  // ============================================================
  const TableauReprises = ({ data, isHistorique }) => (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="px-3 py-3 text-left"># Commande</th>
              <th className="px-3 py-3 text-left">Client / Ville</th>
              <th className="px-3 py-3 text-center">Équipe</th>
              <th className="px-3 py-3 text-center">Type</th>
              <th className="px-3 py-3 text-center">Nb reprises</th>
              <th className="px-3 py-3 text-center">Priorité</th>
              <th className="px-3 py-3 text-center">Statut</th>
              <th className="px-3 py-3 text-center">Coût</th>
              <th className="px-3 py-3 text-center">Date</th>
              {!isHistorique && <th className="px-3 py-3 text-center">Actions</th>}
              {isHistorique && <th className="px-3 py-3 text-center">Complétée le</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((r, i) => (
              <tr
                key={r.id}
                className={`hover:bg-blue-50 cursor-pointer ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} ${r.nombreReprises > 1 ? 'border-l-4 border-l-red-500' : ''}`}
                onClick={() => { setRepriseSelectionnee(r); setShowDetailModal(true); }}
              >
                <td className="px-3 py-3">
                  <p className="font-bold text-slate-800">{r.numCommande}</p>
                </td>
                <td className="px-3 py-3">
                  <p className="font-medium">{r.client}</p>
                  <p className="text-xs text-slate-500">{r.ville}</p>
                </td>
                <td className="px-3 py-3 text-center text-xs font-medium">{r.equipe.replace('Équipe ', '')}</td>
                <td className="px-3 py-3 text-center">
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${getTypeCouleur(r.typeReprise)}`}>{r.typeReprise}</span>
                </td>
                <td className="px-3 py-3 text-center">
                  {r.nombreReprises > 1
                    ? <span className="inline-flex items-center justify-center w-7 h-7 bg-red-500 text-white rounded-full font-bold text-sm">{r.nombreReprises}</span>
                    : <span className="text-slate-400">1</span>
                  }
                </td>
                <td className="px-3 py-3 text-center">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${getPrioriteCouleur(r.priorite)}`}>{r.priorite}</span>
                </td>
                <td className="px-3 py-3 text-center">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getStatutCouleur(r.statut)}`}>{r.statut}</span>
                </td>
                <td className="px-3 py-3 text-center font-medium text-red-600">{r.coutEstime.toLocaleString()} $</td>
                <td className="px-3 py-3 text-center text-xs">{formaterDateCourte(r.dateReprise)}</td>
                {!isHistorique && (
                  <td className="px-3 py-3 text-center" onClick={(e) => e.stopPropagation()}>
                    <div className="flex gap-1 justify-center">
                      <button onClick={() => { setRepriseACompleter(r); setShowConfirmComplete(true); }} className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded" title="Compléter">
                        <Icon name="check" size={16}/>
                      </button>
                      <button onClick={() => { setRepriseEnEdition({...r}); setShowModifierModal(true); }} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded" title="Modifier">
                        <Icon name="edit" size={16}/>
                      </button>
                      <button onClick={() => supprimerReprise(r.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded" title="Supprimer">
                        <Icon name="trash" size={16}/>
                      </button>
                    </div>
                  </td>
                )}
                {isHistorique && (
                  <td className="px-3 py-3 text-center text-xs text-emerald-700 font-medium">{formaterDateCourte(r.dateCompletion)}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.length === 0 && <div className="p-12 text-center text-slate-400">Aucune reprise trouvée</div>}
    </div>
  );

  // ============================================================
  // BARRE DE PROGRESSION
  // ============================================================
  const BarreProgression = ({ valeur, max, couleur, label }) => {
    const pct = max > 0 ? Math.min((valeur / max) * 100, 100) : 0;
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-slate-700 w-44 truncate" title={label}>{label}</span>
        <div className="flex-1 h-5 bg-slate-100 rounded-full overflow-hidden">
          <div className={`h-full rounded-full ${couleur} transition-all duration-500`} style={{ width: `${pct}%` }}/>
        </div>
        <span className="text-sm font-bold text-slate-800 w-16 text-right">{valeur} ({pct.toFixed(0)}%)</span>
      </div>
    );
  };

  // ============================================================
  // RENDU PRINCIPAL
  // ============================================================
  return (
    <div className="space-y-4">
      {/* Modals */}
      <DetailModal />
      <ConfirmCompleteModal />
      <RepriseFormModal show={showAjouterModal} onClose={() => setShowAjouterModal(false)} reprise={nouvelleReprise} setReprise={setNouvelleReprise} onSave={ajouterReprise} titre="Nouvelle reprise" />
      <RepriseFormModal show={showModifierModal} onClose={() => { setShowModifierModal(false); setRepriseEnEdition(null); }} reprise={repriseEnEdition} setReprise={setRepriseEnEdition} onSave={modifierReprise} titre="Modifier la reprise" />

      {/* Header */}
      <div className="bg-slate-800 rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 text-white hover:bg-slate-700 rounded-lg"><Icon name="chevron-left" size={28}/></button>
          <div>
            <h1 className="text-2xl font-bold text-white">Reprises</h1>
            <p className="text-slate-400 text-sm">Suivi des reprises et statistiques d'équipes</p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-white text-sm">
          <div className="text-right"><p className="text-slate-400">Actives</p><p className="text-2xl font-bold text-red-400">{totalReprisesActives}</p></div>
          <div className="text-right"><p className="text-slate-400">Ce mois</p><p className="text-2xl font-bold text-amber-400">{statsMois}</p></div>
          <div className="text-right"><p className="text-slate-400">Coût actif</p><p className="text-2xl font-bold text-red-300">{coutTotalActif.toLocaleString()} $</p></div>
        </div>
      </div>

      {/* Onglets */}
      <div className="flex gap-2 bg-slate-100 p-1 rounded-xl w-fit">
        <button onClick={() => setOnglet('actives')} className={`px-5 py-2.5 rounded-lg font-medium transition-all ${onglet === 'actives' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
          🔧 Actives ({reprisesData.length})
        </button>
        <button onClick={() => setOnglet('historique')} className={`px-5 py-2.5 rounded-lg font-medium transition-all ${onglet === 'historique' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
          📋 Historique ({historiqueReprises.length})
        </button>
        <button onClick={() => setOnglet('statistiques')} className={`px-5 py-2.5 rounded-lg font-medium transition-all ${onglet === 'statistiques' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
          📊 Statistiques
        </button>
        <button onClick={() => setOnglet('conseils')} className={`px-5 py-2.5 rounded-lg font-medium transition-all ${onglet === 'conseils' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'}`}>
          💡 Conseils & Prévention
        </button>
      </div>

      {/* ===== ONGLET ACTIVES ===== */}
      {onglet === 'actives' && (
        <>
          {/* Stats rapides par période */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <button onClick={() => setFiltrePeriode('jour')} className={`p-3 rounded-xl border text-left transition-all ${filtrePeriode === 'jour' ? 'border-blue-400 bg-blue-50 ring-2 ring-blue-200' : 'border-slate-200 bg-white hover:border-blue-300'}`}>
              <p className="text-xs text-slate-500">Aujourd'hui</p>
              <p className="text-xl font-bold text-slate-800">{statsJour}</p>
            </button>
            <button onClick={() => setFiltrePeriode('semaine')} className={`p-3 rounded-xl border text-left transition-all ${filtrePeriode === 'semaine' ? 'border-blue-400 bg-blue-50 ring-2 ring-blue-200' : 'border-slate-200 bg-white hover:border-blue-300'}`}>
              <p className="text-xs text-slate-500">Cette semaine</p>
              <p className="text-xl font-bold text-slate-800">{statsSemaine}</p>
            </button>
            <button onClick={() => setFiltrePeriode('mois')} className={`p-3 rounded-xl border text-left transition-all ${filtrePeriode === 'mois' ? 'border-blue-400 bg-blue-50 ring-2 ring-blue-200' : 'border-slate-200 bg-white hover:border-blue-300'}`}>
              <p className="text-xs text-slate-500">Ce mois</p>
              <p className="text-xl font-bold text-slate-800">{statsMois}</p>
            </button>
            <button onClick={() => setFiltrePeriode('annee')} className={`p-3 rounded-xl border text-left transition-all ${filtrePeriode === 'annee' ? 'border-blue-400 bg-blue-50 ring-2 ring-blue-200' : 'border-slate-200 bg-white hover:border-blue-300'}`}>
              <p className="text-xs text-slate-500">Cette année</p>
              <p className="text-xl font-bold text-slate-800">{statsAnneeEnCours}</p>
            </button>
            <button onClick={() => setFiltrePeriode('tout')} className={`p-3 rounded-xl border text-left transition-all ${filtrePeriode === 'tout' ? 'border-blue-400 bg-blue-50 ring-2 ring-blue-200' : 'border-slate-200 bg-white hover:border-blue-300'}`}>
              <p className="text-xs text-slate-500">Tout</p>
              <p className="text-xl font-bold text-slate-800">{totalToutes}</p>
            </button>
          </div>

          {/* Filtres */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 flex flex-wrap items-end gap-3">
            <div className="flex-1 min-w-[180px]">
              <label className="block text-xs text-slate-500 mb-1">Rechercher</label>
              <input type="text" value={recherche} onChange={(e) => setRecherche(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" placeholder="# commande, client, raison..."/>
            </div>
            <div className="min-w-[180px]">
              <label className="block text-xs text-slate-500 mb-1">Équipe</label>
              <select value={filtreEquipe} onChange={(e) => setFiltreEquipe(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                <option value="">Toutes les équipes</option>
                {equipes.map(eq => <option key={eq} value={eq}>{eq}</option>)}
              </select>
            </div>
            <div className="min-w-[150px]">
              <label className="block text-xs text-slate-500 mb-1">Type</label>
              <select value={filtreType} onChange={(e) => setFiltreType(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                <option value="">Tous types</option>
                {typesReprise.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="min-w-[110px]">
              <label className="block text-xs text-slate-500 mb-1">Priorité</label>
              <select value={filtrePriorite} onChange={(e) => setFiltrePriorite(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                <option value="">Toutes</option>
                {priorites.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <button onClick={() => setShowAjouterModal(true)} className="px-5 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold rounded-lg flex items-center gap-2 shadow">
              <Icon name="plus" size={18}/>Nouvelle reprise
            </button>
          </div>

          {/* Stats commande filtrée */}
          {commandeRecherchee && (
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h3 className="font-bold text-blue-800 mb-2">📊 Stats commande #{commandeRecherchee.numCommande} - {commandeRecherchee.client}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="bg-white rounded-lg p-3 border"><p className="text-xs text-slate-500">Total reprises</p><p className="text-xl font-bold text-red-600">{commandeRecherchee.totalReprises}</p></div>
                <div className="bg-white rounded-lg p-3 border"><p className="text-xs text-slate-500">Nb max reprises</p><p className="text-xl font-bold text-red-600">{commandeRecherchee.nombreMaxReprises}x</p></div>
                <div className="bg-white rounded-lg p-3 border"><p className="text-xs text-slate-500">Coût total</p><p className="text-xl font-bold text-red-600">{commandeRecherchee.coutTotal.toLocaleString()} $</p></div>
                <div className="bg-white rounded-lg p-3 border"><p className="text-xs text-slate-500">Équipes</p><p className="text-sm font-medium">{commandeRecherchee.equipesImpliquees.map(e => e.replace('Équipe ', '')).join(', ')}</p></div>
              </div>
            </div>
          )}

          {/* % par équipe (mini résumé) */}
          {filtreEquipe && (
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <h4 className="font-semibold text-slate-800 mb-2">Statistiques: {filtreEquipe}</h4>
              {(() => {
                const eqStat = statsParEquipe.find(s => s.equipe === filtreEquipe);
                if (!eqStat) return null;
                return (
                  <div className="grid grid-cols-4 gap-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border"><p className="text-xs text-slate-500">Total reprises</p><p className="text-xl font-bold">{eqStat.total}</p></div>
                    <div className="bg-white rounded-lg p-3 border"><p className="text-xs text-slate-500">% du total</p><p className="text-xl font-bold text-red-600">{eqStat.pourcentage}%</p></div>
                    <div className="bg-white rounded-lg p-3 border"><p className="text-xs text-slate-500">Coût total</p><p className="text-xl font-bold text-red-600">{eqStat.cout.toLocaleString()} $</p></div>
                    <div className="bg-white rounded-lg p-3 border"><p className="text-xs text-slate-500">Actives / Complétées</p><p className="text-xl font-bold">{eqStat.actives} / {eqStat.completees}</p></div>
                  </div>
                );
              })()}
            </div>
          )}

          <TableauReprises data={reprisesActivesFiltrees} isHistorique={false} />
        </>
      )}

      {/* ===== ONGLET HISTORIQUE ===== */}
      {onglet === 'historique' && (
        <>
          <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 flex items-center gap-3">
            <Icon name="check" size={24} className="text-emerald-600"/>
            <div>
              <p className="font-semibold text-emerald-800">Historique des reprises complétées</p>
              <p className="text-sm text-emerald-600">{historiqueReprises.length} reprise(s) complétée(s) — Coût total: {coutTotalHistorique.toLocaleString()} $</p>
            </div>
          </div>

          {/* Filtres historique */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 flex flex-wrap items-end gap-3">
            <div className="flex-1 min-w-[180px]">
              <label className="block text-xs text-slate-500 mb-1">Rechercher</label>
              <input type="text" value={recherche} onChange={(e) => setRecherche(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" placeholder="# commande, client..."/>
            </div>
            <div className="min-w-[180px]">
              <label className="block text-xs text-slate-500 mb-1">Équipe</label>
              <select value={filtreEquipe} onChange={(e) => setFiltreEquipe(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                <option value="">Toutes</option>
                {equipes.map(eq => <option key={eq} value={eq}>{eq}</option>)}
              </select>
            </div>
            <div className="min-w-[150px]">
              <label className="block text-xs text-slate-500 mb-1">Type</label>
              <select value={filtreType} onChange={(e) => setFiltreType(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                <option value="">Tous</option>
                {typesReprise.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <TableauReprises data={historiqueFiltree} isHistorique={true} />
        </>
      )}

      {/* ===== ONGLET STATISTIQUES ===== */}
      {onglet === 'statistiques' && (
        <div className="space-y-6">
          {/* Vue d'ensemble */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
              <p className="text-xs text-slate-500">Total toutes</p>
              <p className="text-3xl font-bold text-slate-800">{totalToutes}</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-red-200 text-center">
              <p className="text-xs text-slate-500">Actives</p>
              <p className="text-3xl font-bold text-red-600">{totalReprisesActives}</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-emerald-200 text-center">
              <p className="text-xs text-slate-500">Complétées</p>
              <p className="text-3xl font-bold text-emerald-600">{totalHistorique}</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-amber-200 text-center">
              <p className="text-xs text-slate-500">Multi-reprises</p>
              <p className="text-3xl font-bold text-amber-600">{commandesMultiReprises}</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-red-200 text-center">
              <p className="text-xs text-slate-500">Coût total</p>
              <p className="text-2xl font-bold text-red-600">{(coutTotalActif + coutTotalHistorique).toLocaleString()} $</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-blue-200 text-center">
              <p className="text-xs text-slate-500">Coût moyen</p>
              <p className="text-2xl font-bold text-blue-600">{totalToutes > 0 ? Math.round((coutTotalActif + coutTotalHistorique) / totalToutes).toLocaleString() : 0} $</p>
            </div>
          </div>

          {/* % par équipe */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-800 text-lg mb-4">📊 Pourcentage de reprises par équipe</h3>
            <div className="space-y-3">
              {statsParEquipe.map((s, i) => {
                const couleurs = ['bg-red-500', 'bg-orange-500', 'bg-amber-500', 'bg-blue-500', 'bg-purple-500', 'bg-teal-500'];
                return (
                  <BarreProgression
                    key={s.equipe}
                    label={s.equipe.replace('Équipe ', '')}
                    valeur={s.total}
                    max={totalToutes}
                    couleur={couleurs[i % couleurs.length]}
                  />
                );
              })}
            </div>
            {/* Tableau détaillé équipes */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Équipe</th>
                    <th className="px-4 py-2 text-center">Total</th>
                    <th className="px-4 py-2 text-center">%</th>
                    <th className="px-4 py-2 text-center">Actives</th>
                    <th className="px-4 py-2 text-center">Complétées</th>
                    <th className="px-4 py-2 text-center">Coût</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {statsParEquipe.map((s, i) => (
                    <tr key={s.equipe} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-4 py-2 font-semibold">{s.equipe}</td>
                      <td className="px-4 py-2 text-center font-bold">{s.total}</td>
                      <td className="px-4 py-2 text-center">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${parseFloat(s.pourcentage) > 20 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                          {s.pourcentage}%
                        </span>
                      </td>
                      <td className="px-4 py-2 text-center text-red-600 font-medium">{s.actives}</td>
                      <td className="px-4 py-2 text-center text-emerald-600 font-medium">{s.completees}</td>
                      <td className="px-4 py-2 text-center font-medium">{s.cout.toLocaleString()} $</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* % par type */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-800 text-lg mb-4">🔍 Répartition par type de reprise</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {statsParType.map(s => (
                <div key={s.type} className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex items-center gap-3">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${getTypeCouleur(s.type)}`}>{s.count}</span>
                  <div>
                    <p className="text-sm font-medium">{s.type}</p>
                    <p className="text-xs text-slate-500">{s.pourcentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bilan annuel */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-800 text-lg mb-4">📅 Bilan annuel comparatif</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bilanAnnuel.map(b => (
                <div key={b.annee} className={`rounded-xl p-4 border-2 ${b.annee === new Date().getFullYear() ? 'border-blue-400 bg-blue-50' : 'border-slate-200 bg-slate-50'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold">{b.annee} {b.annee === new Date().getFullYear() && <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full ml-2">En cours</span>}</h4>
                    <span className="text-2xl font-bold text-red-600">{b.total} reprises</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">Coût total: <strong>{b.cout.toLocaleString()} $</strong></p>
                  {b.parType.length > 0 && (
                    <div className="mb-2">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Types les plus fréquents:</p>
                      <div className="flex flex-wrap gap-1">
                        {b.parType.slice(0, 3).map(t => (
                          <span key={t.type} className={`px-2 py-0.5 rounded text-xs font-bold ${getTypeCouleur(t.type)}`}>{t.type} ({t.count})</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {b.parEquipe.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-slate-500 mb-1">Par équipe:</p>
                      <div className="flex flex-wrap gap-1">
                        {b.parEquipe.map(e => (
                          <span key={e.equipe} className="px-2 py-0.5 bg-white border border-slate-300 rounded text-xs">{e.equipe.replace('Équipe ', '')} ({e.count})</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Comparaison année en cours vs précédente */}
          {statsAnneePrecedente > 0 && (
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-800 text-lg mb-4">📈 Tendance année en cours vs précédente</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-xl bg-slate-50 border">
                  <p className="text-sm text-slate-500">{new Date().getFullYear() - 1}</p>
                  <p className="text-4xl font-bold text-slate-600">{statsAnneePrecedente}</p>
                  <p className="text-xs text-slate-400">reprises</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-blue-50 border border-blue-200">
                  <p className="text-sm text-blue-600">{new Date().getFullYear()} (en cours)</p>
                  <p className="text-4xl font-bold text-blue-700">{statsAnneeEnCours}</p>
                  <p className="text-xs text-slate-400">reprises</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                {statsAnneeEnCours > statsAnneePrecedente
                  ? <p className="text-red-600 font-semibold">⚠️ Hausse de {((statsAnneeEnCours - statsAnneePrecedente) / statsAnneePrecedente * 100).toFixed(0)}% par rapport à l'an dernier</p>
                  : <p className="text-emerald-600 font-semibold">✅ Baisse de {((statsAnneePrecedente - statsAnneeEnCours) / statsAnneePrecedente * 100).toFixed(0)}% par rapport à l'an dernier</p>
                }
              </div>
            </div>
          )}
        </div>
      )}

      {/* ===== ONGLET CONSEILS ===== */}
      {onglet === 'conseils' && (
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <p className="font-semibold text-blue-800">💡 Conseils et recommandations basés sur l'analyse de vos reprises</p>
            <p className="text-sm text-blue-600 mt-1">Ces conseils sont générés automatiquement à partir des données de reprises les plus fréquentes.</p>
          </div>

          {/* Conseils dynamiques basés sur les données */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Conseil #1 - Erreurs de mesure */}
            {toutesReprises.filter(r => r.typeReprise === 'Erreur de mesure').length > 0 && (
              <div className="bg-white rounded-xl p-5 border-l-4 border-l-red-500 border border-slate-200">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📏</span>
                  <div>
                    <h4 className="font-bold text-slate-800">Erreurs de mesure ({toutesReprises.filter(r => r.typeReprise === 'Erreur de mesure').length} cas)</h4>
                    <p className="text-sm text-slate-600 mt-1">C'est l'un des types de reprise les plus coûteux. Voici des mesures préventives:</p>
                    <ul className="mt-2 text-sm text-slate-700 space-y-1">
                      <li>• <strong>Double vérification:</strong> Toujours faire vérifier les mesures par un second mesureur</li>
                      <li>• <strong>Photos systématiques:</strong> Prendre des photos de chaque point de mesure avec le ruban visible</li>
                      <li>• <strong>Gabarit standard:</strong> Utiliser un formulaire de mesure avec checklist des points à vérifier</li>
                      <li>• <strong>Formation continue:</strong> Session mensuelle de calibration des mesureurs</li>
                      <li>• <strong>Outil numérique:</strong> Envisager un télémètre laser avec transfert direct des données</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Conseil #2 - Défauts de matériau */}
            {toutesReprises.filter(r => r.typeReprise === 'Défaut de matériau').length > 0 && (
              <div className="bg-white rounded-xl p-5 border-l-4 border-l-orange-500 border border-slate-200">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔬</span>
                  <div>
                    <h4 className="font-bold text-slate-800">Défauts de matériau ({toutesReprises.filter(r => r.typeReprise === 'Défaut de matériau').length} cas)</h4>
                    <p className="text-sm text-slate-600 mt-1">Les défauts matériaux impactent la qualité et la satisfaction client:</p>
                    <ul className="mt-2 text-sm text-slate-700 space-y-1">
                      <li>• <strong>Inspection à réception:</strong> Vérifier chaque lot de matériaux dès la réception</li>
                      <li>• <strong>Registre fournisseurs:</strong> Tenir un historique de qualité par fournisseur</li>
                      <li>• <strong>Échantillonnage:</strong> Tester un échantillon avant mise en production</li>
                      <li>• <strong>Communication fournisseur:</strong> Signaler systématiquement les défauts au fournisseur</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Conseil #3 - Installation */}
            {toutesReprises.filter(r => r.typeReprise === 'Problème d\'installation').length > 0 && (
              <div className="bg-white rounded-xl p-5 border-l-4 border-l-blue-500 border border-slate-200">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔧</span>
                  <div>
                    <h4 className="font-bold text-slate-800">Problèmes d'installation ({toutesReprises.filter(r => r.typeReprise === 'Problème d\'installation').length} cas)</h4>
                    <p className="text-sm text-slate-600 mt-1">Améliorations pour réduire les erreurs d'installation:</p>
                    <ul className="mt-2 text-sm text-slate-700 space-y-1">
                      <li>• <strong>Visite préalable:</strong> Évaluer le chantier avant le jour d'installation</li>
                      <li>• <strong>Checklist terrain:</strong> Liste de vérification pré-installation (niveau, support, accès)</li>
                      <li>• <strong>Mentor/compagnon:</strong> Jumeler les nouveaux installateurs avec des expérimentés</li>
                      <li>• <strong>Photos avant/après:</strong> Documenter l'état du chantier avant et après</li>
                      <li>• <strong>Briefing d'équipe:</strong> Revue du projet 15 min avant chaque installation</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Conseil #4 - Transport */}
            {toutesReprises.filter(r => r.typeReprise === 'Dommage en transport').length > 0 && (
              <div className="bg-white rounded-xl p-5 border-l-4 border-l-slate-500 border border-slate-200">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚚</span>
                  <div>
                    <h4 className="font-bold text-slate-800">Dommages en transport ({toutesReprises.filter(r => r.typeReprise === 'Dommage en transport').length} cas)</h4>
                    <p className="text-sm text-slate-600 mt-1">Prévenir les dommages pendant le transport:</p>
                    <ul className="mt-2 text-sm text-slate-700 space-y-1">
                      <li>• <strong>Emballage renforcé:</strong> Protéger les coins et surfaces avec mousse et carton</li>
                      <li>• <strong>Arrimage sécurisé:</strong> Utiliser des sangles et séparateurs dans le camion</li>
                      <li>• <strong>Formation chauffeur:</strong> Procédure de chargement/déchargement standardisée</li>
                      <li>• <strong>Inspection au départ:</strong> Vérifier l'état des pièces avant le départ</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Conseil #5 - Coupe */}
            {toutesReprises.filter(r => r.typeReprise === 'Mauvaise coupe').length > 0 && (
              <div className="bg-white rounded-xl p-5 border-l-4 border-l-amber-500 border border-slate-200">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✂️</span>
                  <div>
                    <h4 className="font-bold text-slate-800">Mauvaises coupes ({toutesReprises.filter(r => r.typeReprise === 'Mauvaise coupe').length} cas)</h4>
                    <p className="text-sm text-slate-600 mt-1">Réduire les erreurs de coupe en production:</p>
                    <ul className="mt-2 text-sm text-slate-700 space-y-1">
                      <li>• <strong>Validation croisée:</strong> Vérifier les dimensions sur le bon de coupe vs la commande</li>
                      <li>• <strong>Marquage clair:</strong> Identifier chaque pièce avec numéro de commande</li>
                      <li>• <strong>Calibration machines:</strong> Vérification quotidienne des gabarits de coupe</li>
                      <li>• <strong>Mesure post-coupe:</strong> Contrôle dimensionnel après chaque coupe critique</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Conseil #6 - Couleur */}
            {toutesReprises.filter(r => r.typeReprise === 'Erreur de couleur').length > 0 && (
              <div className="bg-white rounded-xl p-5 border-l-4 border-l-pink-500 border border-slate-200">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h4 className="font-bold text-slate-800">Erreurs de couleur ({toutesReprises.filter(r => r.typeReprise === 'Erreur de couleur').length} cas)</h4>
                    <p className="text-sm text-slate-600 mt-1">Éviter les erreurs de couleur:</p>
                    <ul className="mt-2 text-sm text-slate-700 space-y-1">
                      <li>• <strong>Code couleur standardisé:</strong> Utiliser des codes précis au lieu de descriptions textuelles</li>
                      <li>• <strong>Confirmation client:</strong> Faire valider la couleur par le client avec un échantillon</li>
                      <li>• <strong>Étiquetage:</strong> Étiqueter chaque lot avec couleur + code + numéro de commande</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Recommandations générales */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-800 text-lg mb-4">🎯 Recommandations générales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                <h4 className="font-semibold text-emerald-800 mb-2">✅ Actions immédiates</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Réunion hebdomadaire de 15 min sur les reprises de la semaine</li>
                  <li>• Formulaire de reprise obligatoire avec cause identifiée</li>
                  <li>• Photo avant/après pour chaque reprise</li>
                  <li>• Feedback immédiat à l'équipe concernée</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">📋 Actions à moyen terme</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Programme de formation trimestriel par type d'erreur</li>
                  <li>• Système de bonus pour les équipes avec le moins de reprises</li>
                  <li>• Audit qualité mensuel sur les processus critiques</li>
                  <li>• Analyse des tendances et ajustement des procédures</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">⚠️ Points d'attention</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  {statsParEquipe[0] && <li>• L'équipe <strong>{statsParEquipe[0].equipe}</strong> a le plus de reprises ({statsParEquipe[0].pourcentage}%) — nécessite un suivi rapproché</li>}
                  {commandesMultiReprises > 0 && <li>• <strong>{commandesMultiReprises}</strong> commande(s) ont nécessité plusieurs reprises — analyser les causes profondes</li>}
                  {statsParType[0] && <li>• Le type <strong>"{statsParType[0].type}"</strong> est le plus fréquent ({statsParType[0].pourcentage}%) — priorité d'amélioration</li>}
                </ul>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">🏆 Objectifs suggérés</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Réduire les reprises de 20% d'ici la fin de l'année</li>
                  <li>• Éliminer les erreurs de mesure récurrentes sous 3 mois</li>
                  <li>• Aucune commande avec plus de 2 reprises</li>
                  <li>• Coût moyen par reprise sous {totalToutes > 0 ? Math.round((coutTotalActif + coutTotalHistorique) / totalToutes * 0.8).toLocaleString() : 300} $</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

  // === ROUTER ===
  const renderScreen = () => {
    switch(currentScreen) {
      case 'dashboard': return <Dashboard />;
      case 'clients': return <Clients />;
      case 'commandes': return <Commandes />;
      case 'production': return <Production />;
      case 'planification': return <Planification />;
      case 'interventions': return <Interventions />;
      case 'cueillettes': return <Cueillettes />;
      case 'inventaire': return <Inventaire />;
      case 'achats': return <Achats />;
      case 'rentabilite': return <Rentabilite />;
      case 'attentes': return <Attentes />;
      case 'reprises': return <Reprises />;
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
                Intervention
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