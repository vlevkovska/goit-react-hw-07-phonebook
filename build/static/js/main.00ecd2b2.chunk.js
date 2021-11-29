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
    30: function (e, t, n) {
      e.exports = { loaderStyle: 'Loader_loaderStyle__ZRvFX' };
    },
    33: function (e, t, n) {
      e.exports = n(65);
    },
    44: function (e, t, n) {},
    65: function (e, t, n) {
      'use strict';
      n.r(t);
      var a,
        r,
        c = n(0),
        o = n.n(c),
        l = n(13),
        i = n.n(l),
        u = n(4),
        s = n(12),
        m = n(10),
        b = n(1),
        d = n(5),
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
        _ = Object(b.d)(
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
        v = Object(b.d)(
          '',
          Object(m.a)({}, h, function (e, t) {
            return t.payload;
          }),
        ),
        C = Object(d.b)({ items: _, filter: v }),
        g = n(23),
        y = n(6),
        O = Object(g.a)({
          reducerPath: 'contactApi',
          baseQuery: Object(y.d)({
            baseUrl: 'https://619965819022ea0017a7ae55.mockapi.io/',
          }),
          tagTypes: ['Contact'],
          endpoints: function (e) {
            return {
              fetchContacts: e.query({
                query: function () {
                  return '/contacts';
                },
                providesTags: ['Contact'],
              }),
              deleteContact: e.mutation({
                query: function (e) {
                  return { url: '/contact/'.concat(e), method: 'DELETE' };
                },
                invalidatesTags: ['Contact'],
              }),
              addNewContact: e.mutation({
                query: function (e, t) {
                  return {
                    url: '/contacts',
                    method: 'POST',
                    body: { name: e, number: t },
                  };
                },
                invalidatesTags: ['Contact'],
              }),
            };
          },
        }),
        j = O.useFetchContactsQuery,
        F = O.useDeleteContactMutation,
        S =
          (O.useAddNewContactMutation,
          Object(b.a)({
            reducer: Object(m.a)({ filter: C }, O.reducerPath, O.reducer),
            middleware: function (e) {
              return [].concat(Object(s.a)(e()), [O.middleware]);
            },
            devTools: !1,
          })),
        N = (n(44), n(24)),
        w = n.n(N);
      var x = function (e) {
          var t = e.children;
          return o.a.createElement('div', { className: w.a.container }, t);
        },
        A = n(8),
        T = n(3),
        k = n.n(T),
        q = n(25),
        z = n.n(q);
      function L(e) {
        var t = e.title,
          n = e.children;
        return o.a.createElement(
          'section',
          null,
          o.a.createElement('h2', { className: z.a.title }, t),
          n,
        );
      }
      L.protoType = { title: k.a.string };
      var Z = L,
        D = n(26),
        J = n(9),
        M = n.n(J);
      function B(e) {
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
              var n = { id: Object(D.v4)(), name: r, number: s };
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
      B.protoType = { onSubmit: k.a.func };
      var I = B,
        P = n(16),
        R = n.n(P),
        Q = function (e) {
          var t = e.filter,
            n = e.onChangeFilter;
          return o.a.createElement(
            'label',
            { className: R.a.label },
            'Find contacts by name',
            o.a.createElement('input', {
              className: R.a.input,
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
      Q.protoType = {
        filter: k.a.string.isRequired,
        onChangeFilter: k.a.func.isRequired,
      };
      var U = Q,
        Y = n(17),
        $ = n.n(Y),
        H = n(18),
        K = n.n(H),
        X = n(27),
        G = n(28),
        V = n(32),
        W = n(31),
        ee = n(29),
        te = n.n(ee),
        ne = n(30),
        ae = n.n(ne),
        re = (function (e) {
          Object(V.a)(n, e);
          var t = Object(W.a)(n);
          function n() {
            return Object(X.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(G.a)(n, [
              {
                key: 'render',
                value: function () {
                  return o.a.createElement(
                    'div',
                    { className: ae.a.loaderStyle },
                    o.a.createElement(te.a, {
                      type: 'ThreeDots',
                      color: '#00BFFF',
                      height: 18,
                      width: 50,
                      timeout: 2e3,
                    }),
                  );
                },
              },
            ]),
            n
          );
        })(c.Component);
      function ce(e) {
        var t = e.id,
          n = e.name,
          a = e.number,
          r = F(),
          c = Object(A.a)(r, 2),
          l = c[0],
          i = c[1].isLoading;
        return o.a.createElement(
          'p',
          { className: K.a.box },
          o.a.createElement('span', null, n),
          o.a.createElement('span', null, a),
          o.a.createElement(
            'button',
            {
              className: K.a.btn,
              type: 'button',
              disabled: i,
              onClick: function () {
                return l(t);
              },
            },
            i ? o.a.createElement(re, null) : 'Remove',
          ),
        );
      }
      var oe = function (e) {
        var t = e.contacts,
          n = e.deleteContact;
        return o.a.createElement(
          'ul',
          { className: $.a.list },
          t.map(function (e) {
            return o.a.createElement(
              'li',
              { key: e.id, className: $.a.item },
              o.a.createElement(ce, {
                name: e.name,
                number: e.number,
                onDeleteContact: function () {
                  return n(e.id);
                },
              }),
            );
          }),
        );
      };
      var le = Object(u.c)(
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
            o.a.createElement(I, { contacts: c }),
          ),
          o.a.createElement(
            Z,
            { title: 'Contacts' },
            o.a.createElement(U, { filter: n, onChangeFilter: a }),
            i && o.a.createElement('h4', null, 'Loading...'),
            c &&
              o.a.createElement(oe, {
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
      var ie = function () {
        return o.a.createElement(x, null, o.a.createElement(le, null));
      };
      console.log(S),
        console.log(S.getState()),
        i.a.render(
          o.a.createElement(
            o.a.StrictMode,
            null,
            o.a.createElement(u.a, { store: S }, o.a.createElement(ie, null)),
          ),
          document.getElementById('root'),
        );
    },
    9: function (e, t, n) {
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
  [[33, 1, 2]],
]);
//# sourceMappingURL=main.00ecd2b2.chunk.js.map
