/* eslint-disable no-use-before-define */
export interface Root {
  took: number;
  timed_out: boolean;
  _shards: Shards;
  hits: Hits;
}

export interface Shards {
  total: number;
  successful: number;
  skipped: number;
  failed: number;
}

export interface Hits {
  total: number;
  max_score: number;
  hits: Hit[];
}

export interface Hit {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: Source;
}

export interface Source {
  Vrvirksomhed: Vrvirksomhed;
}

export interface Vrvirksomhed {
  cvrNummer: number;
  regNummer: any[];
  brancheAnsvarskode: any;
  reklamebeskyttet: boolean;
  navne: Navne[];
  binavne: Binavne[];
  postadresse: any[];
  beliggenhedsadresse: Beliggenhedsadresse[];
  telefonNummer: TelefonNummer[];
  telefaxNummer: TelefaxNummer[];
  sekundaertTelefonNummer: any[];
  sekundaertTelefaxNummer: any[];
  elektroniskPost: ElektroniskPost[];
  hjemmeside: any[];
  obligatoriskEmail: any[];
  livsforloeb: Livsforloeb[];
  hovedbranche: Hovedbranche[];
  bibranche1: Bibranche1[];
  bibranche2: any[];
  bibranche3: any[];
  status: any[];
  virksomhedsstatus: Status[];
  virksomhedsform: Virksomhedsform[];
  aarsbeskaeftigelse: Aarsbeskaeftigelse[];
  kvartalsbeskaeftigelse: Kvartalsbeskaeftigelse[];
  maanedsbeskaeftigelse: Maanedsbeskaeftigelse[];
  erstMaanedsbeskaeftigelse: ErstMaanedsbeskaeftigelse[];
  attributter: Attributter[];
  penheder: Penheder[];
  deltagerRelation: DeltagerRelation[];
  fusioner: any[];
  spaltninger: any[];
  virksomhedMetadata: VirksomhedMetadata;
  samtId: number;
  fejlRegistreret: boolean;
  dataAdgang: number;
  enhedsNummer: number;
  enhedstype: string;
  sidstIndlaest: string;
  sidstOpdateret: string;
  fejlVedIndlaesning: boolean;
  naermesteFremtidigeDato: any;
  fejlBeskrivelse: string;
  virkningsAktoer: string;
}

export interface Navne {
  navn: string;
  periode: Periode;
  sidstOpdateret: string;
}

export interface Periode {
  gyldigFra: string;
  gyldigTil: any;
}

export interface Binavne {
  navn: string;
  periode: Periode2;
  sidstOpdateret: string;
}

export interface Periode2 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface Beliggenhedsadresse {
  landekode: string;
  fritekst: any;
  vejkode: number;
  kommune: Kommune;
  husnummerFra: number;
  adresseId?: string;
  sidstValideret?: string;
  husnummerTil: any;
  bogstavFra: any;
  bogstavTil: any;
  etage?: string;
  sidedoer?: string;
  conavn: any;
  postboks: any;
  vejnavn: string;
  bynavn: any;
  postnummer: number;
  postdistrikt: string;
  periode: Periode4;
  sidstOpdateret: string;
}

export interface Kommune {
  kommuneKode: number;
  kommuneNavn: string;
  periode: Periode3;
  sidstOpdateret: string;
}

export interface Periode3 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface Periode4 {
  gyldigFra: string;
  gyldigTil?: string;
}

export interface TelefonNummer {
  kontaktoplysning: string;
  hemmelig: boolean;
  periode: Periode5;
  sidstOpdateret: string;
}

export interface Periode5 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface TelefaxNummer {
  kontaktoplysning: string;
  hemmelig: boolean;
  periode: Periode6;
  sidstOpdateret: string;
}

export interface Periode6 {
  gyldigFra: string;
  gyldigTil: string;
}

export interface ElektroniskPost {
  kontaktoplysning: string;
  hemmelig: boolean;
  periode: Periode7;
  sidstOpdateret: string;
}

export interface Periode7 {
  gyldigFra: string;
  gyldigTil?: string;
}

export interface Livsforloeb {
  periode: Periode8;
  sidstOpdateret: string;
}

export interface Periode8 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface Hovedbranche {
  branchekode: string;
  branchetekst: string;
  periode: Periode9;
  sidstOpdateret: string;
}

export interface Periode9 {
  gyldigFra: string;
  gyldigTil?: string;
}

export interface Bibranche1 {
  branchekode: string;
  branchetekst: string;
  periode: Periode10;
  sidstOpdateret: string;
}

export interface Periode10 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface Status {
  status: string;
  periode: Periode11;
  sidstOpdateret: string;
}

export interface Periode11 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface Virksomhedsform {
  virksomhedsformkode: number;
  kortBeskrivelse: string;
  langBeskrivelse: string;
  ansvarligDataleverandoer: string;
  periode: Periode12;
  sidstOpdateret: string;
}

export interface Periode12 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface Aarsbeskaeftigelse {
  aar: number;
  antalInklusivEjere: any;
  antalAarsvaerk: number;
  antalAnsatte: number;
  sidstOpdateret: string;
  intervalKodeAntalInklusivEjere: any;
  intervalKodeAntalAarsvaerk: string;
  intervalKodeAntalAnsatte: string;
}

export interface Kvartalsbeskaeftigelse {
  aar: number;
  kvartal: number;
  antalAarsvaerk: number;
  antalAnsatte?: number;
  sidstOpdateret: string;
  intervalKodeAntalAarsvaerk: string;
  intervalKodeAntalAnsatte?: string;
}

export interface Maanedsbeskaeftigelse {
  aar: number;
  maaned: number;
  antalAarsvaerk: number;
  antalAnsatte: number;
  sidstOpdateret: string;
  intervalKodeAntalAarsvaerk: string;
  intervalKodeAntalAnsatte: string;
}

export interface ErstMaanedsbeskaeftigelse {
  aar: number;
  maaned: number;
  antalAarsvaerk: number;
  antalAnsatte: number;
  sidstOpdateret: string;
  intervalKodeAntalAarsvaerk: string;
  intervalKodeAntalAnsatte: string;
}

export interface Attributter {
  sekvensnr: number;
  type: string;
  vaerditype: string;
  vaerdier: Vaerdier[];
}

export interface Vaerdier {
  vaerdi: string;
  periode: Periode13;
  sidstOpdateret: string;
}

export interface Periode13 {
  gyldigFra: string;
  gyldigTil?: string;
}

export interface Penheder {
  pNummer: number;
  periode: Periode14;
  sidstOpdateret: string;
}

export interface Periode14 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface DeltagerRelation {
  deltager: Deltager;
  kontorsteder: Kontorsteder[];
  organisationer: Organisationer[];
}

export interface Deltager {
  enhedsNummer: number;
  enhedstype: string;
  forretningsnoegle?: number;
  organisationstype: any;
  sidstIndlaest: string;
  sidstOpdateret: string;
  navne: Navne2[];
  adresseHemmelig?: boolean;
  adresseHemmeligUndtagelse?: boolean;
  adresseOpdateringOphoert?: boolean;
  beliggenhedsadresse: Beliggenhedsadresse2[];
  postadresse: Postadresse[];
}

export interface Navne2 {
  navn: string;
  periode: Periode15;
  sidstOpdateret?: string;
}

export interface Periode15 {
  gyldigFra?: string;
  gyldigTil?: string;
}

export interface Beliggenhedsadresse2 {
  landekode: string;
  fritekst: any;
  vejkode: number;
  kommune: Kommune2;
  husnummerFra: number;
  adresseId?: string;
  sidstValideret?: string;
  husnummerTil?: number;
  bogstavFra?: string;
  bogstavTil: any;
  etage?: string;
  sidedoer?: string;
  conavn?: string;
  postboks: any;
  vejnavn: string;
  bynavn?: string;
  postnummer: number;
  postdistrikt: string;
  periode: Periode17;
  sidstOpdateret: string;
}

export interface Kommune2 {
  kommuneKode: number;
  kommuneNavn: string;
  periode: Periode16;
  sidstOpdateret: string;
}

export interface Periode16 {
  gyldigFra?: string;
  gyldigTil?: string;
}

export interface Periode17 {
  gyldigFra: string;
  gyldigTil?: string;
}

export interface Postadresse {
  landekode: string;
  fritekst: any;
  vejkode: number;
  kommune: Kommune3;
  husnummerFra: number;
  adresseId: any;
  sidstValideret: any;
  husnummerTil: any;
  bogstavFra: any;
  bogstavTil: any;
  etage: string;
  sidedoer: any;
  conavn: string;
  postboks: any;
  vejnavn: string;
  bynavn: any;
  postnummer: number;
  postdistrikt: string;
  periode: Periode19;
  sidstOpdateret: string;
}

export interface Kommune3 {
  kommuneKode: number;
  kommuneNavn: string;
  periode: Periode18;
  sidstOpdateret: string;
}

export interface Periode18 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface Periode19 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface Kontorsteder {
  penhed: Penhed;
  attributter: Attributter2[];
}

export interface Penhed {
  enhedsNummer: number;
  enhedstype: string;
  forretningsnoegle: number;
  organisationstype: any;
  sidstIndlaest: string;
  sidstOpdateret: any;
  navne: Navne3[];
  adresseHemmelig: any;
  adresseHemmeligUndtagelse: any;
  adresseOpdateringOphoert: any;
  beliggenhedsadresse: Beliggenhedsadresse3[];
  postadresse: any[];
}

export interface Navne3 {
  navn: string;
  periode: Periode20;
  sidstOpdateret: string;
}

export interface Periode20 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface Beliggenhedsadresse3 {
  landekode: string;
  fritekst: any;
  vejkode: number;
  kommune: Kommune4;
  husnummerFra: number;
  adresseId: any;
  sidstValideret: any;
  husnummerTil: any;
  bogstavFra: any;
  bogstavTil: any;
  etage: any;
  sidedoer: any;
  conavn: any;
  postboks: any;
  vejnavn: string;
  bynavn: any;
  postnummer: number;
  postdistrikt: string;
  periode: Periode22;
  sidstOpdateret: string;
}

export interface Kommune4 {
  kommuneKode: number;
  kommuneNavn: string;
  periode: Periode21;
  sidstOpdateret: string;
}

export interface Periode21 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface Periode22 {
  gyldigFra: string;
  gyldigTil?: string;
}

export interface Attributter2 {
  sekvensnr: number;
  type: string;
  vaerditype: string;
  vaerdier: Vaerdier2[];
}

export interface Vaerdier2 {
  vaerdi: string;
  periode: Periode23;
  sidstOpdateret: string;
}

export interface Periode23 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface Organisationer {
  enhedsNummerOrganisation: number;
  hovedtype: string;
  organisationsNavn: OrganisationsNavn[];
  attributter: Attributter3[];
  medlemsData: MedlemsDaum[];
}

export interface OrganisationsNavn {
  navn: string;
  periode: Periode24;
  sidstOpdateret: string;
}

export interface Periode24 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface Attributter3 {
  sekvensnr: number;
  type: string;
  vaerditype: string;
  vaerdier: Vaerdier3[];
}

export interface Vaerdier3 {
  vaerdi: string;
  periode: Periode25;
  sidstOpdateret: string;
}

export interface Periode25 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface MedlemsDaum {
  attributter: Attributter4[];
}

export interface Attributter4 {
  sekvensnr: number;
  type: string;
  vaerditype: string;
  vaerdier: Vaerdier4[];
}

export interface Vaerdier4 {
  vaerdi: string;
  periode: Periode26;
  sidstOpdateret: string;
}

export interface Periode26 {
  gyldigFra: string;
  gyldigTil?: string;
}

export interface VirksomhedMetadata {
  nyesteNavn: NyesteNavn;
  nyesteBinavne: string[];
  nyesteVirksomhedsform: NyesteVirksomhedsform;
  nyesteBeliggenhedsadresse: NyesteBeliggenhedsadresse;
  nyesteHovedbranche: NyesteHovedbranche;
  nyesteBibranche1: NyesteBibranche1;
  nyesteBibranche2: any;
  nyesteBibranche3: any;
  nyesteStatus: any;
  nyesteKontaktoplysninger: string[];
  antalPenheder: number;
  nyesteAarsbeskaeftigelse: NyesteAarsbeskaeftigelse;
  nyesteKvartalsbeskaeftigelse: NyesteKvartalsbeskaeftigelse;
  nyesteMaanedsbeskaeftigelse: NyesteMaanedsbeskaeftigelse;
  nyesteErstMaanedsbeskaeftigelse: NyesteErstMaanedsbeskaeftigelse;
  sammensatStatus: string;
  stiftelsesDato: string;
  virkningsDato: string;
}

export interface NyesteNavn {
  navn: string;
  periode: Periode27;
  sidstOpdateret: string;
}

export interface Periode27 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface NyesteVirksomhedsform {
  virksomhedsformkode: number;
  kortBeskrivelse: string;
  langBeskrivelse: string;
  ansvarligDataleverandoer: string;
  periode: Periode28;
  sidstOpdateret: string;
}

export interface Periode28 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface NyesteBeliggenhedsadresse {
  landekode: string;
  fritekst: any;
  vejkode: number;
  kommune: Kommune5;
  husnummerFra: number;
  adresseId: string;
  sidstValideret: string;
  husnummerTil: any;
  bogstavFra: any;
  bogstavTil: any;
  etage: any;
  sidedoer: any;
  conavn: any;
  postboks: any;
  vejnavn: string;
  bynavn: any;
  postnummer: number;
  postdistrikt: string;
  periode: Periode30;
  sidstOpdateret: string;
}

export interface Kommune5 {
  kommuneKode: number;
  kommuneNavn: string;
  periode: Periode29;
  sidstOpdateret: string;
}

export interface Periode29 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface Periode30 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface NyesteHovedbranche {
  branchekode: string;
  branchetekst: string;
  periode: Periode31;
  sidstOpdateret: string;
}

export interface Periode31 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface NyesteBibranche1 {
  branchekode: string;
  branchetekst: string;
  periode: Periode32;
  sidstOpdateret: string;
}

export interface Periode32 {
  gyldigFra: string;
  gyldigTil: any;
}

export interface NyesteAarsbeskaeftigelse {
  aar: number;
  antalInklusivEjere: any;
  antalAarsvaerk: number;
  antalAnsatte: number;
  sidstOpdateret: string;
  intervalKodeAntalInklusivEjere: any;
  intervalKodeAntalAarsvaerk: string;
  intervalKodeAntalAnsatte: string;
}

export interface NyesteKvartalsbeskaeftigelse {
  aar: number;
  kvartal: number;
  antalAarsvaerk: number;
  antalAnsatte: number;
  sidstOpdateret: string;
  intervalKodeAntalAarsvaerk: string;
  intervalKodeAntalAnsatte: string;
}

export interface NyesteMaanedsbeskaeftigelse {
  aar: number;
  maaned: number;
  antalAarsvaerk: number;
  antalAnsatte: number;
  sidstOpdateret: string;
  intervalKodeAntalAarsvaerk: string;
  intervalKodeAntalAnsatte: string;
}

export interface NyesteErstMaanedsbeskaeftigelse {
  aar: number;
  maaned: number;
  antalAarsvaerk: number;
  antalAnsatte: number;
  sidstOpdateret: string;
  intervalKodeAntalAarsvaerk: string;
  intervalKodeAntalAnsatte: string;
}
