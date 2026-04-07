import type { ComponentType, SVGProps } from 'react';
import {
  ClipboardDocumentListIcon,
  CodeBracketSquareIcon,
  DocumentMagnifyingGlassIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/outline';

type StageIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type LearningStageKey =
  | 'research'
  | 'planning'
  | 'development'
  | 'promotion';

export const LEARNING_STAGES: Record<
  LearningStageKey,
  {
    label: string;
    title: string;
    icon: StageIcon;
    iconColor: string;
    badgeBackground: string;
    badgeBorder: string;
    badgeShadow: string;
  }
> = {
  research: {
    label: 'Research',
    title: '調査',
    icon: DocumentMagnifyingGlassIcon,
    iconColor: '#ffe1b0',
    badgeBackground:
      'linear-gradient(145deg, rgba(224,144,48,0.22) 0%, rgba(123,63,25,0.14) 100%)',
    badgeBorder: 'rgba(255,210,145,0.36)',
    badgeShadow: '0 14px 28px rgba(123,63,25,0.18)',
  },
  planning: {
    label: 'Planning',
    title: '企画',
    icon: ClipboardDocumentListIcon,
    iconColor: '#ffe5ad',
    badgeBackground:
      'linear-gradient(145deg, rgba(200,150,10,0.24) 0%, rgba(123,63,25,0.10) 100%)',
    badgeBorder: 'rgba(255,223,148,0.34)',
    badgeShadow: '0 14px 28px rgba(200,150,10,0.16)',
  },
  development: {
    label: 'Development',
    title: '開発',
    icon: CodeBracketSquareIcon,
    iconColor: '#c7f7ec',
    badgeBackground:
      'linear-gradient(145deg, rgba(21,92,86,0.24) 0%, rgba(10,26,22,0.16) 100%)',
    badgeBorder: 'rgba(134,233,214,0.32)',
    badgeShadow: '0 14px 28px rgba(21,92,86,0.18)',
  },
  promotion: {
    label: 'Promotion',
    title: '広報',
    icon: MegaphoneIcon,
    iconColor: '#ffd1bc',
    badgeBackground:
      'linear-gradient(145deg, rgba(215,106,66,0.22) 0%, rgba(123,63,25,0.14) 100%)',
    badgeBorder: 'rgba(255,189,160,0.34)',
    badgeShadow: '0 14px 28px rgba(150,72,34,0.18)',
  },
};
