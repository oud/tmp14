import dayjs from 'dayjs/esm';

import { IPmEntreprise, NewPmEntreprise } from './pm-entreprise.model';

export const sampleWithRequiredData: IPmEntreprise = {
  id: 'e3a7283d-99d4-4b59-9c5c-0e44aee1c28f',
  idEntrepriseRPG: 'hmph',
  codePartenaireDistributeur: 'near duh potable',
  numeroSiretSiege: 'ruddy',
  codeEtat: 'mockingly appropriate suddenly',
  libelleEtat: 'huff',
  codeCategoriePersonne: 'unique pish',
  libelleCategoriePersonne: 'inwardly meanwhile',
  codeType: 'likely noteworthy',
  dateCreationJuridique: dayjs('2025-04-11'),
  dateEtat: dayjs('2025-04-10'),
  dateFermetureJuridique: dayjs('2025-04-11'),
  codeTrancheEffectif: 'lest',
  libelleTrancheEffectif: 'within',
  dateCessationActivite: dayjs('2025-04-11'),
  dateEffectifOfficiel: dayjs('2025-04-11'),
  effectifOfficiel: 'ick describe glorious',
  codeMotifCessationActivite: 'gladly ick',
  siren: 'blah finally',
  codeFormeJuridique: 'woot up weighty',
  raisonSociale: 'unlike',
  codeCategorieJuridique: 'like poorly er',
  codeIDCC: 'sleepily',
  codeAPE: 'biodegrade owlishly',
};

export const sampleWithPartialData: IPmEntreprise = {
  id: 'b2b38ae9-7cfa-4a86-b494-c8fa0b2c598d',
  idEntrepriseRPG: 'bowling likewise naturally',
  codePartenaireDistributeur: 'sociable yowza',
  numeroSiretSiege: 'too sticker nervous',
  codeEtat: 'cheetah',
  libelleEtat: 'whoa commemorate',
  codeCategoriePersonne: 'upbeat inwardly although',
  libelleCategoriePersonne: 'vision aggressive apropos',
  codeType: 'regularly',
  dateCreationJuridique: dayjs('2025-04-11'),
  dateEtat: dayjs('2025-04-11'),
  dateFermetureJuridique: dayjs('2025-04-11'),
  codeTrancheEffectif: 'matter energetically on',
  libelleTrancheEffectif: 'that godfather how',
  dateCessationActivite: dayjs('2025-04-10'),
  dateEffectifOfficiel: dayjs('2025-04-10'),
  effectifOfficiel: 'mid polarisation',
  codeMotifCessationActivite: 'woot in-joke',
  siren: 'ick',
  codeFormeJuridique: 'among',
  raisonSociale: 'giving',
  codeCategorieJuridique: 'supposing zowie yum',
  codeIDCC: 'advanced',
  codeAPE: 'slushy',
};

export const sampleWithFullData: IPmEntreprise = {
  id: '4d18a81a-2e62-47ec-8a28-28b7c3cfb703',
  idEntrepriseRPG: 'dally',
  codePartenaireDistributeur: 'satirise ah swiftly',
  numeroSiretSiege: 'yowza fooey brown',
  codeEtat: 'evince',
  libelleEtat: 'positively',
  codeCategoriePersonne: 'measly gosh softly',
  libelleCategoriePersonne: 'supposing sentimental beneath',
  codeType: 'carefully without consequently',
  dateCreationJuridique: dayjs('2025-04-11'),
  dateEtat: dayjs('2025-04-11'),
  dateFermetureJuridique: dayjs('2025-04-11'),
  codeTrancheEffectif: 'dramatize',
  libelleTrancheEffectif: 'whether aw derby',
  dateCessationActivite: dayjs('2025-04-11'),
  dateEffectifOfficiel: dayjs('2025-04-10'),
  effectifOfficiel: 'polished plump mosh',
  codeMotifCessationActivite: 'absent in',
  siren: 'meh',
  codeFormeJuridique: 'perp',
  raisonSociale: 'clinch fantastic',
  codeCategorieJuridique: 'incline',
  codeIDCC: 'parched honestly',
  codeAPE: 'fooey',
};

export const sampleWithNewData: NewPmEntreprise = {
  idEntrepriseRPG: 'playfully',
  codePartenaireDistributeur: 'whoa whimsical expostulate',
  numeroSiretSiege: 'and unwelcome',
  codeEtat: 'summarise',
  libelleEtat: 'whenever finally',
  codeCategoriePersonne: 'inasmuch statement metabolise',
  libelleCategoriePersonne: 'aftermath gadzooks',
  codeType: 'well-to-do ugh ew',
  dateCreationJuridique: dayjs('2025-04-11'),
  dateEtat: dayjs('2025-04-11'),
  dateFermetureJuridique: dayjs('2025-04-10'),
  codeTrancheEffectif: 'rough elementary an',
  libelleTrancheEffectif: 'boastfully',
  dateCessationActivite: dayjs('2025-04-11'),
  dateEffectifOfficiel: dayjs('2025-04-10'),
  effectifOfficiel: 'hungrily',
  codeMotifCessationActivite: 'rectangular regarding',
  siren: 'forenenst fraudster um',
  codeFormeJuridique: 'puritan',
  raisonSociale: 'joyous mash',
  codeCategorieJuridique: 'yet',
  codeIDCC: 'madly until mediocre',
  codeAPE: 'maestro',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
