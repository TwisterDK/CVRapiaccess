import { Aarsbeskaeftigelse } from './Aarsbeskaeftigelse.type';
import { Attributter } from './Attributter.type';
import { Beliggenhedsadresse } from './Beliggenhedsadresse.type';
import { Branche } from './Branche.type';
import { DeltagerRelation } from './DeltagerRelation.type';
import { ElektroniskPost } from './ElektroniskPost.type';
import { Kvartalsbeskaeftigelse } from './Kvartalsbeskaeftigelse.type';
import { Livsforloeb } from './Livsforloeb.type';
import { Maanedsbeskaeftigelse } from './Maanedsbeskaeftigelse.type';
import { Navne } from './Navne.type';
import { Penheder } from './Penheder.type';
import { Postadresse } from './Postadresse.type';
import { Status } from './Status.type';
import { TelefonNummer } from './TelefonNummer.type';
import { VirksomhedMetadata } from './VirksomhedMetadata.type';
import { Virksomhedsform } from './Virksomhedsform.type';
import { regNummer } from './regNummer.type';

export type Vrvirksomhed = {
  cvrNummer: number;
  regNummer?: regNummer[];
  brancheAnsvarskode?: number;
  reklamebeskyttet: boolean;
  navne: Navne[];
  binavne: Navne[];
  postadresse?: Postadresse[];
  beliggenhedsadresse?: Beliggenhedsadresse[];
  telefonNummer: TelefonNummer[];
  telefaxNummer: TelefonNummer[];
  sekundaertTelefonNummer?: TelefonNummer[];
  sekundaertTelefaxNummer?: TelefonNummer[];
  elektroniskPost: ElektroniskPost[];
  // hjemmeside?: any[];
  // obligatoriskEmail?: any[];
  livsforloeb: Livsforloeb[];
  hovedbranche: Branche[];
  bibranche1: Branche[];
  bibranche2: Branche[];
  bibranche3: Branche[];
  // status?: any[];
  virksomhedsstatus: Status[];
  virksomhedsform: Virksomhedsform[];
  aarsbeskaeftigelse: Aarsbeskaeftigelse[];
  kvartalsbeskaeftigelse: Kvartalsbeskaeftigelse[];
  maanedsbeskaeftigelse: Maanedsbeskaeftigelse[];
  erstMaanedsbeskaeftigelse: Maanedsbeskaeftigelse[];
  attributter: Attributter[];
  penheder: Penheder[];
  deltagerRelation: DeltagerRelation[];
  // fusioner?: any[];
  // spaltninger?: any[];
  virksomhedMetadata: VirksomhedMetadata;
  samtId: number;
  fejlRegistreret: boolean;
  dataAdgang: number;
  enhedsNummer: number;
  enhedstype: string;
  sidstIndlaest: string;
  sidstOpdateret: string;
  fejlVedIndlaesning: boolean;
  naermesteFremtidigeDato?: Date;
  fejlBeskrivelse: string;
  virkningsAktoer: string;
};
