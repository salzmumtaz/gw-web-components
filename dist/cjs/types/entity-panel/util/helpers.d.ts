import { GroupComplianceRules, IComplianceRule } from '../models';
export declare const groupByRuleCategory: (list: IComplianceRule[]) => GroupComplianceRules;
export declare const searchRuleByTitle: (searchValue: string, itemList: IComplianceRule[]) => IComplianceRule[];
