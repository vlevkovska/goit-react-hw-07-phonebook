(this['webpackJsonpgoit-react-hw-07-phonebook'] =
  this['webpackJsonpgoit-react-hw-07-phonebook'] || []).push([
  [0],
  {
    19: function (e, t, n) {
      e.exports = {
        label: 'Filter_label__YmxMc',
        input: 'Filter_input__1IPB8',
      };
    },
    20: function (e, t, n) {
      e.exports = { list: 'ContactList_list__3Emw8' };
    },
    21: function (e, t, n) {
      e.exports = {
        box: 'ContactElement_box__36DiQ',
        btn: 'ContactElement_btn__2ZxtE',
      };
    },
    23: function (e, t, n) {
      e.exports = { container: 'Container_container__3A7u1' };
    },
    24: function (e, t, n) {
      e.exports = { title: 'Section_title__17-lM' };
    },
    34: function (e, t, n) {},
    36: function (e, t, n) {
      'use strict';
      n.r(t);
      var a,
        c,
        r = n(0),
        i = n.n(r),
        o = n(14),
        s = n.n(o),
        l = n(17),
        u = n(15),
        b = n(13),
        m = n(5),
        d = n(9),
        j = n(11),
        p = n(3),
        f = Object(m.b)('contacts/Add'),
        h = Object(m.b)('contacts/Delete'),
        O = Object(m.b)('filter/Change'),
        x =
          null !== (a = JSON.parse(localStorage.getItem('contacts'))) &&
          void 0 !== a
            ? a
            : [
                { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
                { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
                { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
                { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
              ],
        _ = Object(m.c)(
          x,
          ((c = {}),
          Object(j.a)(c, f, function (e, t) {
            var n = t.payload;
            if (
              e.some(function (e) {
                return e.name.includes(n.name);
              })
            )
              return alert(''.concat(n.name, ' is already in contacts!')), e;
            var a = [].concat(Object(b.a)(e), [n]);
            return (
              window.localStorage.setItem('contacts', JSON.stringify(a)), a
            );
          }),
          Object(j.a)(c, h, function (e, t) {
            var n = t.payload,
              a = Object(b.a)(
                e.filter(function (e) {
                  return e.id !== n;
                }),
              );
            return (
              window.localStorage.setItem('contacts', JSON.stringify(a)), a
            );
          }),
          c),
        ),
        C = Object(m.c)(
          '',
          Object(j.a)({}, O, function (e, t) {
            return t.payload;
          }),
        ),
        v = Object(p.b)({ items: _, filter: C }),
        g = Object(b.a)(
          Object(m.d)({
            serializableCheck: {
              ignoredActions: [d.a, d.f, d.b, d.c, d.d, d.e],
            },
          }),
        ),
        S = Object(m.a)({
          reducer: { contacts: v },
          middleware: g,
          devTools: !1,
        }),
        y = (n(34), n(2)),
        N = n(23),
        F = n.n(N),
        w = n(1);
      var A = function (e) {
          var t = e.children;
          return Object(w.jsx)('div', {
            className: F.a.container,
            children: t,
          });
        },
        k = n(7),
        z = n.n(k),
        E = n(24),
        T = n.n(E);
      function Z(e) {
        var t = e.title,
          n = e.children;
        return Object(w.jsxs)('section', {
          children: [
            Object(w.jsx)('h2', { className: T.a.title, children: t }),
            n,
          ],
        });
      }
      Z.protoType = { title: z.a.string };
      var J = Z,
        q = n(6),
        D = n(38),
        I = n(8),
        B = n.n(I);
      function L(e) {
        var t = e.onSubmit,
          n = Object(r.useState)(''),
          a = Object(q.a)(n, 2),
          c = a[0],
          i = a[1],
          o = Object(r.useState)(''),
          s = Object(q.a)(o, 2),
          l = s[0],
          u = s[1],
          b = function (e) {
            var t = e.currentTarget,
              n = t.name,
              a = t.value;
            switch (n) {
              case 'name':
                i(a);
                break;
              case 'number':
                u(a);
                break;
              default:
                return;
            }
          },
          m = function () {
            i(''), u('');
          };
        return Object(w.jsxs)('form', {
          className: B.a.form,
          onSubmit: function (e) {
            e.preventDefault();
            var n = { id: Object(D.a)(), name: c, number: l };
            t(n), m();
          },
          children: [
            Object(w.jsxs)('label', {
              className: B.a.label,
              children: [
                'Enter name',
                Object(w.jsx)('input', {
                  className: B.a.input,
                  type: 'text',
                  name: 'name',
                  pattern:
                    "^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",
                  title:
                    "The name can only contain letters, apostrophe, dash and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc.",
                  required: !0,
                  onChange: b,
                  value: c,
                }),
              ],
            }),
            Object(w.jsxs)('label', {
              className: B.a.label,
              children: [
                'Enter number',
                Object(w.jsx)('input', {
                  className: B.a.input_number,
                  type: 'tel',
                  name: 'number',
                  pattern:
                    '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}',
                  title:
                    'The phone number can consist of numerals, spaces, dashes, brackets and start with +',
                  required: !0,
                  onChange: b,
                  value: l,
                }),
              ],
            }),
            Object(w.jsx)('button', {
              className: B.a.button,
              type: 'submit',
              children: 'Save',
            }),
          ],
        });
      }
      L.protoType = { onSubmit: z.a.func };
      var M = L,
        R = n(19),
        P = n.n(R),
        Y = function (e) {
          var t = e.filter,
            n = e.onChangeFilter;
          return Object(w.jsxs)('label', {
            className: P.a.label,
            children: [
              'Find contacts by name',
              Object(w.jsx)('input', {
                className: P.a.input,
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
            ],
          });
        };
      Y.protoType = {
        filter: z.a.string.isRequired,
        onChangeFilter: z.a.func.isRequired,
      };
      var $ = Y,
        H = n(20),
        K = n.n(H),
        Q = n(21),
        U = n.n(Q),
        G = function (e) {
          var t = e.name,
            n = e.number,
            a = e.id,
            c = e.onDeleteContact;
          return Object(w.jsxs)('p', {
            className: U.a.box,
            children: [
              Object(w.jsxs)('span', { children: [t, ':'] }),
              Object(w.jsx)('span', { children: n }),
              Object(w.jsx)('button', {
                className: U.a.btn,
                type: 'button',
                onClick: function () {
                  return c(a);
                },
                children: 'Remove',
              }),
            ],
          });
        },
        V = function (e) {
          var t = e.contacts,
            n = e.deleteContact;
          return Object(w.jsx)('ul', {
            className: K.a.list,
            children: t.map(function (e) {
              var t = e.id,
                a = e.name,
                c = e.number;
              return Object(w.jsx)(
                'li',
                {
                  className: K.a.item,
                  children: Object(w.jsx)(G, {
                    name: a,
                    number: c,
                    onDeleteContact: function () {
                      return n(t);
                    },
                  }),
                },
                t,
              );
            }),
          });
        };
      var W = Object(u.b)(
        function (e) {
          return { items: e.contacts.items, filter: e.contacts.filter };
        },
        function (e) {
          return {
            addContact: function (t) {
              return e(f(t));
            },
            deleteContact: function (t) {
              return e(h(t));
            },
            changeFilter: function (t) {
              return e(O(t.target.value));
            },
          };
        },
      )(function (e) {
        var t,
          n = e.items,
          a = e.filter,
          c = e.addContact,
          r = e.deleteContact,
          i = e.changeFilter;
        return Object(w.jsxs)(A, {
          children: [
            Object(w.jsx)(J, {
              title: 'Phonebook',
              children: Object(w.jsx)(M, { onSubmit: c }),
            }),
            Object(w.jsxs)(J, {
              title: 'Contacts',
              children: [
                Object(w.jsx)($, { filter: a, onChangeFilter: i }),
                '' === a
                  ? Object(w.jsx)(V, { contacts: n, deleteContact: r })
                  : Object(w.jsx)(V, {
                      contacts:
                        ((t = a),
                        n.filter(function (e) {
                          return e.name.toLocaleLowerCase().includes(t);
                        })),
                      deleteContact: r,
                    }),
              ],
            }),
          ],
        });
      });
      var X = function () {
        return Object(w.jsx)(A, {
          children: Object(w.jsx)(y.c, {
            children: Object(w.jsx)(y.a, {
              exact: !0,
              path: '/',
              element: Object(w.jsx)(W, {}),
            }),
          }),
        });
      };
      console.log(S),
        console.log(S.getState()),
        s.a.render(
          Object(w.jsx)(i.a.StrictMode, {
            children: Object(w.jsx)(l.a, {
              children: Object(w.jsx)(u.a, {
                store: S,
                children: Object(w.jsx)(X, {}),
              }),
            }),
          }),
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
  [[36, 1, 2]],
]);
//# sourceMappingURL=main.14332cbd.chunk.js.map
