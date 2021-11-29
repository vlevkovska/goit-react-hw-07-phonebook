import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://619965819022ea0017a7ae55.mockapi.io/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId =>
        // console.log(contactId, "ContactID")
        ({
          url: `/contacts/${contactId}`,
          method: 'DELETE',
        }),
      invalidatesTags: ['Contact'],
    }),
    addNewContact: builder.mutation({
      query: newContact =>
        // console.log(newContact, "newContact")
        ({
          url: '/contacts',
          method: 'POST',
          body: {
            name: newContact.name,
            number: newContact.number,
          },
        }),

      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddNewContactMutation,
} = contactApi;
