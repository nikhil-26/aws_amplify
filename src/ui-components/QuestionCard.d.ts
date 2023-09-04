/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Question } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionCardOverridesProps = {
    QuestionCard?: PrimitiveOverrideProps<ViewProps>;
    Headline?: PrimitiveOverrideProps<FlexProps>;
    "New Amplify Studio gives designers the ability to export UI to React code"?: PrimitiveOverrideProps<TextProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    authorName?: PrimitiveOverrideProps<TextProps>;
    createdAtDate?: PrimitiveOverrideProps<TextProps>;
    "Read more36522759"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Read more36522761"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type QuestionCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    question?: Question;
} & {
    overrides?: QuestionCardOverridesProps | undefined | null;
}>;
export default function QuestionCard(props: QuestionCardProps): React.ReactElement;
