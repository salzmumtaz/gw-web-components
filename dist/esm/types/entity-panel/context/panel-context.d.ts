import { FC } from 'react';
import { EntityPanelMeta, ICoreEntityPanelProps } from '../models';
import { EntityPanelService } from '../services';
import { EntityPanelStore } from '../store';
export interface ICommonEntityPanelProps {
    entityPanelService: EntityPanelService;
    entityPanelStore: EntityPanelStore;
    togglePin: (panelCode: any) => void;
    toggleDrawer: (isExpanded: boolean) => void;
    pinnedEntityPanelCode?: string;
}
export interface IEntityPanelProps extends ICoreEntityPanelProps, ICommonEntityPanelProps {
}
export declare const EntityPanelContext: import("react").Context<EntityPanelMeta>;
export declare const EntityPanelContextProvider: FC<IEntityPanelProps>;
export declare const useEntityPanelContext: () => EntityPanelMeta;
