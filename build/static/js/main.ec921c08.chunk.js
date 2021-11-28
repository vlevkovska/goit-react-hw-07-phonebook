(this['webpackJsonpgoit-react-hw-07-phonebook'] =
  this['webpackJsonpgoit-react-hw-07-phonebook'] || []).push([
  [0],
  {
    16: function (e, t, n) {
      e.exports = {
        label: 'Filter_label__YmxMc',
        input: 'Filter_input__1IPB8',
      };
    },
    17: function (e, t, n) {
      e.exports = { list: 'ContactList_list__3Emw8' };
    },
    18: function (e, t, n) {
      e.exports = {
        box: 'ContactElement_box__36DiQ',
        btn: 'ContactElement_btn__2ZxtE',
      };
    },
    24: function (e, t, n) {
      e.exports = { container: 'Container_container__3A7u1' };
    },
    25: function (e, t, n) {
      e.exports = { title: 'Section_title__17-lM' };
    },
    27: function (e, t, n) {
      e.exports = n(41);
    },
    38: function (e, t, n) {},
    41: function (e, t, n) {
      'use strict';
      n.r(t);
      var a,
        r,
        c = n(0),
        o = n.n(c),
        l = n(13),
        i = n.n(l),
        u = n(3),
        s = n(11),
        m = n(9),
        b = n(1),
        d = n(4),
        p = Object(b.b)('contacts/Add'),
        f = Object(b.b)('contacts/Delete'),
        h = Object(b.b)('filter/Change'),
        E =
          null !== (a = JSON.parse(localStorage.getItem('contacts'))) &&
          void 0 !== a
            ? a
            : [
                { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
                { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
                { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
                { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
              ],
        C = Object(b.d)(
          E,
          ((r = {}),
          Object(m.a)(r, p, function (e, t) {
            var n = t.payload;
            if (
              e.some(function (e) {
                return e.name.includes(n.name);
              })
            )
              return alert(''.concat(n.name, ' is already in contacts!')), e;
            var a = [].concat(Object(s.a)(e), [n]);
            return (
              window.localStorage.setItem('contacts', JSON.stringify(a)), a
            );
          }),
          Object(m.a)(r, f, function (e, t) {
            var n = t.payload,
              a = Object(s.a)(
                e.filter(function (e) {
                  return e.id !== n;
                }),
              );
            return (
              window.localStorage.setItem('contacts', JSON.stringify(a)), a
            );
          }),
          r),
        ),
        _ = Object(b.d)(
          '',
          Object(m.a)({}, h, function (e, t) {
            return t.payload;
          }),
        ),
        v = Object(d.b)({ items: C, filter: _ }),
        g = n(23),
        y = n(5),
        O = Object(g.a)({
          reducerPath: 'contactsApi',
          baseQuery: Object(y.d)({
            baseUrl: 'https://619965819022ea0017a7ae55.mockapi.io/',
          }),
          tagTypes: ['Contacts'],
          endpoints: function (e) {
            return {
              fetchContacts: e.query({
                query: function () {
                  return '/Contacts';
                },
                providesTags: ['Contacts'],
              }),
              deleteContact: e.mutation({
                query: function (e) {
                  return { url: '/Contacts/'.concat(e), method: 'DELETE' };
                },
                invalidatesTags: ['Contacts'],
              }),
              addNewContact: e.mutation({
                query: function (e) {
                  return { url: '/Contacts', method: 'POST', body: e };
                },
                invalidatesTags: ['Contacts'],
              }),
            };
          },
        }),
        j = O.useFetchContactsQuery,
        F = O.useDeleteContactMutation,
        N =
          (O.useAddNewContactMutation,
          O.useFindContactsQuery,
          Object(b.a)({
            reducer: Object(m.a)({ filter: v }, O.reducerPath, O.reducer),
            middleware: function (e) {
              return [].concat(Object(s.a)(e()), [O.middleware]);
            },
            devTools: !1,
          })),
        S = (n(38), n(24)),
        w = n.n(S);
      var x = function (e) {
          var t = e.children;
          return o.a.createElement('div', { className: w.a.container }, t);
        },
        A = n(12),
        T = n(7),
        k = n.n(T),
        q = n(25),
        z = n.n(q);
      function D(e) {
        var t = e.title,
          n = e.children;
        return o.a.createElement(
          'section',
          null,
          o.a.createElement('h2', { className: z.a.title }, t),
          n,
        );
      }
      D.protoType = { title: k.a.string };
      var Z = D,
        J = n(26),
        L = n(8),
        M = n.n(L);
      function I(e) {
        var t = e.onSubmit,
          n = Object(c.useState)(''),
          a = Object(A.a)(n, 2),
          r = a[0],
          l = a[1],
          i = Object(c.useState)(''),
          u = Object(A.a)(i, 2),
          s = u[0],
          m = u[1],
          b = function (e) {
            var t = e.currentTarget,
              n = t.name,
              a = t.value;
            switch (n) {
              case 'name':
                l(a);
                break;
              case 'number':
                m(a);
                break;
              default:
                return;
            }
          },
          d = function () {
            l(''), m('');
          };
        return o.a.createElement(
          'form',
          {
            className: M.a.form,
            onSubmit: function (e) {
              e.preventDefault();
              var n = { id: Object(J.v4)(), name: r, number: s };
              t(n), d();
            },
          },
          o.a.createElement(
            'label',
            { className: M.a.label },
            'Enter name',
            o.a.createElement('input', {
              className: M.a.input,
              type: 'text',
              name: 'name',
              pattern:
                "^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",
              title:
                "The name can only contain letters, apostrophe, dash and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc.",
              required: !0,
              onChange: b,
              value: r,
            }),
          ),
          o.a.createElement(
            'label',
            { className: M.a.label },
            'Enter number',
            o.a.createElement('input', {
              className: M.a.input_number,
              type: 'tel',
              name: 'number',
              pattern:
                '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}',
              title:
                'The phone number can consist of numerals, spaces, dashes, brackets and start with +',
              required: !0,
              onChange: b,
              value: s,
            }),
          ),
          o.a.createElement(
            'button',
            { className: M.a.button, type: 'submit' },
            'Save',
          ),
        );
      }
      I.protoType = { onSubmit: k.a.func };
      var P = I,
        B = n(16),
        Q = n.n(B),
        R = function (e) {
          var t = e.filter,
            n = e.onChangeFilter;
          return o.a.createElement(
            'label',
            { className: Q.a.label },
            'Find contacts by name',
            o.a.createElement('input', {
              className: Q.a.input,
              type: 'text',
              name: 'filter',
              pattern:
                "^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",
              title:
                "Enter the contact's name. Search is not sensitive to input characters.",
              required: !0,
              onChange: n,
              value: t,
            }),
          );
        };
      R.protoType = {
        filter: k.a.string.isRequired,
        onChangeFilter: k.a.func.isRequired,
      };
      var U = R,
        Y = n(17),
        $ = n.n(Y),
        H = n(18),
        K = n.n(H),
        G = function (e) {
          var t = e.name,
            n = e.number,
            a = e.id,
            r = e.onDeleteContact;
          return o.a.createElement(
            'p',
            { className: K.a.box },
            o.a.createElement('span', null, t, ':'),
            o.a.createElement('span', null, n),
            o.a.createElement(
              'button',
              {
                className: K.a.btn,
                type: 'button',
                onClick: function () {
                  return r(a);
                },
              },
              'Remove',
            ),
          );
        },
        V = function (e) {
          var t = e.contacts,
            n = e.deleteContact;
          return o.a.createElement(
            'ul',
            { className: $.a.list },
            t.map(function (e) {
              var t = e.id,
                a = e.name,
                r = e.number;
              return o.a.createElement(
                'li',
                { key: t, className: $.a.item },
                o.a.createElement(G, {
                  name: a,
                  number: r,
                  onDeleteContact: function () {
                    return n(t);
                  },
                }),
              );
            }),
          );
        };
      var W = Object(u.c)(
        function (e) {
          return { filter: e.filter.filter };
        },
        function (e) {
          return {
            changeFilter: function (t) {
              return e(h(t.target.value));
            },
          };
        },
      )(function (e) {
        var t,
          n = e.filter,
          a = e.changeFilter,
          r = j(),
          c = r.data,
          l = r.error,
          i = r.isFetching,
          u = F(),
          s = Object(A.a)(u, 1)[0];
        return o.a.createElement(
          x,
          null,
          o.a.createElement(
            Z,
            { title: 'Phonebook' },
            o.a.createElement(P, { contacts: c }),
          ),
          o.a.createElement(
            Z,
            { title: 'Contacts' },
            o.a.createElement(U, { filter: n, onChangeFilter: a }),
            i && o.a.createElement('h4', null, 'Loading...'),
            c &&
              o.a.createElement(V, {
                contacts:
                  ((t = n),
                  '' === t
                    ? c
                    : c.filter(function (e) {
                        return e.name.toLocaleLowerCase().includes(t);
                      })),
                deleteContact: s,
              }),
            l && o.a.createElement('h4', null, l),
          ),
        );
      });
      var X = function () {
        return o.a.createElement(x, null, o.a.createElement(W, null));
      };
      console.log(N),
        console.log(N.getState()),
        i.a.render(
          o.a.createElement(
            o.a.StrictMode,
            null,
            o.a.createElement(u.a, { store: N }, o.a.createElement(X, null)),
          ),
          document.getElementById('root'),
        );
    },
    8: function (e, t, n) {
      e.exports = {
        form: 'ContactForm_form__2Ufa0',
        label: 'ContactForm_label__3pgfB',
        input: 'ContactForm_input__1Yh9F',
        'input-number': 'ContactForm_input-number__3pA98',
        input_number: 'ContactForm_input_number__33vba',
        button: 'ContactForm_button__1jzLr',
      };
    },
  },
  [[27, 1, 2]],
]);
//# sourceMappingURL=main.ec921c08.chunk.js.map
