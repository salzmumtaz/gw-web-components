import { Observable } from 'rxjs';
import { ComplianceEntityTypeCode, IComplianceRule } from '../models';
export declare abstract class EntityPanelService {
    abstract getComplianceRuleList(payload: any, entityCode: ComplianceEntityTypeCode): Observable<IComplianceRule[]>;
}
