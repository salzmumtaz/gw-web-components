import { Observable } from 'rxjs';
import { ComplianceEntityTypeCode } from './enums';
export interface IComplianceRule {
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
export interface IComplianceAccordionItem {
    item: IComplianceRule;
}
export interface FilteredStatusRules {
    warningRuleList: IComplianceRule[];
    nonCompliantRuleList: IComplianceRule[];
    compliantRuleList: IComplianceRule[];
    notApplicableRuleList: IComplianceRule[];
}
export interface IComplianceEntity {
    data$: Observable<any>;
    code: ComplianceEntityTypeCode;
    isPrimary?: boolean;
}
export interface VersionProps {
    id: string;
}
export interface ICoreEntityPanelProps {
    entityList: IComplianceEntity[];
}
export interface IEntityPanelStoreState extends ICoreEntityPanelProps {
}
