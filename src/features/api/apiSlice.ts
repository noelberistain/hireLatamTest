import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface LoginArgs {
	email: string;
	password: string;
}

export type ErrorResponse = {
	data: {
		code: string;
		log_id: string;
		message: string;
	};
	status: number;
};

type LoginResponse = {
	accesses: {
		store_id: number;
		user_id: number;
		role_id: number;
		role: { id: number; name: string };
		store: {
			id: number;
			name: string;
			url: string;
			created_at: string;
			status: string;
			traffic_status: string;
			public_id: string;
			private_id: string;
			website_technology: string;
			client_type: string;
			plan_group_id: number;
			revive_plan_group_id: number;
			email_milestones_id: null;
			marketing_platform: string;
			email_subdomain: boolean;
			estimated_revenue: string;
			estimated_site_traffic: string;
			quick_description: null;
			recent_3_templates: boolean;
			store_category: number;
			use_default_dashboard_group: boolean;
			default_dashboard_group_id: null;
			owner_invited: true;
			hidden_contact_table_columns: [];
			referral: null;
			avatar_url: null;
			_count: {
				members: number;
			};
		};
	}[];
};

type LoginQueryReturn = ErrorResponse | LoginResponse;

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://stgapp-bwgkn3md.opensend.com',
	}),
	endpoints: build => ({
		login: build.mutation<LoginQueryReturn, LoginArgs>({
			query: ({ email, password }) => ({
				url: '/auth/login',
				method: 'POST',
				body: {
					email,
					password,
				},
			}),
		}),
	}),
});

export const { useLoginMutation } = apiSlice;
