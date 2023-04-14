import { Aarsbeskaeftigelse } from './Aarsbeskaeftigelse.type';
import { Beliggenhedsadresse } from './Beliggenhedsadresse.type';
import { Branche } from './Branche.type';
import { Kvartalsbeskaeftigelse } from './Kvartalsbeskaeftigelse.type';
import { Maanedsbeskaeftigelse } from './Maanedsbeskaeftigelse.type';
import { Navne } from './Navne.type';
import { Virksomhedsform } from './Virksomhedsform.type';

export type VirksomhedMetadata = {
  nyesteNavn: Navne;
  nyesteBinavne: string[];
  nyesteVirksomhedsform: Virksomhedsform;
  nyesteBeliggenhedsadresse: Beliggenhedsadresse;
  nyesteHovedbranche: Branche;
  nyesteBibranche1: Branche;
  nyesteBibranche2: Branche;
  nyesteBibranche3: Branche;
  // nyesteStatus: any;
  nyesteKontaktoplysninger: string[];
  antalPenheder: number;
  nyesteAarsbeskaeftigelse: Aarsbeskaeftigelse;
  nyesteKvartalsbeskaeftigelse: Kvartalsbeskaeftigelse;
  nyesteMaanedsbeskaeftigelse: Maanedsbeskaeftigelse;
  nyesteErstMaanedsbeskaeftigelse: Maanedsbeskaeftigelse;
  sammensatStatus: string;
  stiftelsesDato: string;
  virkningsDato: string;
};
