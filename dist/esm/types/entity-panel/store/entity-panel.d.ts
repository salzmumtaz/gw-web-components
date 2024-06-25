import { BaseSubjectStore } from '@procom-labs/common';
import { IComplianceEntity, IEntityPanelStoreState } from '../models';
export declare class EntityPanelStore extends BaseSubjectStore<IEntityPanelStoreState> {
    getDefaultValue(): Required<IEntityPanelStoreState>;
    updateEntityData(entityList?: IComplianceEntity[], entityData?: any | null): void;
}
