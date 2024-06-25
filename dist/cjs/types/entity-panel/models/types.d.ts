import React from 'react';
import { Subscription } from 'rxjs';
import { EntityPanelCode } from './enums';
import { IComplianceRule, ICoreEntityPanelProps, VersionProps } from './interfaces';
export type GroupComplianceRules = Record<string, IComplianceRule[]>;
export type EntityPanelMeta = {
    togglePanel: () => void;
    isExpanded: boolean;
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
    togglePin: (panelCode: EntityPanelCode | null) => void;
    openPanel: () => void;
    closePanel: () => void;
    isListLoading: boolean;
    complianceRuleList: IComplianceRule[];
    fetchComplianceRuleList?: (isManual?: boolean) => Subscription;
    pinnedEntityPanelCode?: string;
};
export type EntityPanelProps = ICoreEntityPanelProps | VersionProps;
