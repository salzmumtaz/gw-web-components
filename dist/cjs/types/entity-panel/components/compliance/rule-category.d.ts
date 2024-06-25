import * as React from 'react';
import { AccordionProps } from '@mui/material/Accordion';
import { IComplianceRule } from '../../models';
export declare const ComplianceRuleCategory: React.FC<{
    ruleList: IComplianceRule[];
    categoryTitle: string;
} & Pick<AccordionProps, 'expanded'>>;
