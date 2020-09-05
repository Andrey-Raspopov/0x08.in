import {InjectedProps, Site} from '../../types';

export type Props = {} & InjectedProps;

export type Query = {
	site: Site;
};

export type HeadProps = Query & InjectedProps;