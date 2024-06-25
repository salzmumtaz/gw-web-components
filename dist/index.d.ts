import * as _emotion_react_jsx_runtime from '@emotion/react/jsx-runtime';
import { PaletteModeCode, BaseSubjectStore } from '@procom-labs/common';
import { Observable, Subscription } from 'rxjs';
import React from 'react';

interface Props {
    text: string;
}
declare const ExampleTplComponent: ({ text }: Props) => _emotion_react_jsx_runtime.JSX.Element;

interface AppContextProps {
    themeMode?: PaletteModeCode;
    isAngular?: boolean;
}

declare enum ComplianceFilter {
    All = "All",
    Warning = "Warning",
    NonCompliant = "NonCompliant",
    NotApplicable = "NotApplicable"
}
declare enum RuleStrictness {
    NotApplicable = 10,
    Warning = 20,
    Regular = 30,
    Mandatory = 40
}
declare enum EntityPanelCode {
    CompliancyChecklist = "CompliancyChecklist"
}
declare enum ComplianceEntityTypeCode {
    onboarding360request = "onboarding360Request",
    onboarding360package = "onboarding360package",
    informationrequest = "informationRequest"
}

interface IComplianceRule {
    ruleName: string;
    ruleText: string;
    strictness: number;
    sortOrder: number;
    isValid: boolean;
    additionalInformation: string | null;
    actionName: string;
    ruleCategory: string;
    reasons: string | null;
    ruleExecutionTimeInMilliSec: number;
}
interface IComplianceAccordionItem {
    item: IComplianceRule;
}
interface FilteredStatusRules {
    warningRuleList: IComplianceRule[];
    nonCompliantRuleList: IComplianceRule[];
    compliantRuleList: IComplianceRule[];
    notApplicableRuleList: IComplianceRule[];
}
interface IComplianceEntity {
    data$: Observable<any>;
    code: ComplianceEntityTypeCode;
    isPrimary?: boolean;
}
interface VersionProps {
    id: string;
}
interface ICoreEntityPanelProps {
    entityList: IComplianceEntity[];
}
interface IEntityPanelStoreState extends ICoreEntityPanelProps {
}

type GroupComplianceRules = Record<string, IComplianceRule[]>;
type EntityPanelMeta = {
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
type EntityPanelProps = ICoreEntityPanelProps | VersionProps;

declare abstract class EntityPanelService {
    abstract getComplianceRuleList(payload: any, entityCode: ComplianceEntityTypeCode): Observable<IComplianceRule[]>;
}

declare class EntityPanelStore extends BaseSubjectStore<IEntityPanelStoreState> {
    getDefaultValue(): Required<IEntityPanelStoreState>;
    updateEntityData(entityList?: IComplianceEntity[], entityData?: any | null): void;
}

interface ICommonEntityPanelProps {
    entityPanelService: EntityPanelService;
    entityPanelStore: EntityPanelStore;
    togglePin: (panelCode: any) => void;
    toggleDrawer: (isExpanded: boolean) => void;
    pinnedEntityPanelCode?: string;
}
interface IEntityPanelProps extends ICoreEntityPanelProps, ICommonEntityPanelProps {
}

declare const EntityPanel: (props: IEntityPanelProps & AppContextProps) => _emotion_react_jsx_runtime.JSX.Element;

export { ComplianceEntityTypeCode, ComplianceFilter, EntityPanel, EntityPanelCode, type EntityPanelMeta, type EntityPanelProps, EntityPanelService, EntityPanelStore, ExampleTplComponent, type FilteredStatusRules, type GroupComplianceRules, type IComplianceAccordionItem, type IComplianceEntity, type IComplianceRule, type ICoreEntityPanelProps, type IEntityPanelStoreState, RuleStrictness, type VersionProps };
