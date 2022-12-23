# Tailwind Modifiers

| Modifier          | CSS                                            |
|-------------------|------------------------------------------------|
| hover             | &amp;:hover                                    |
| focus             | &amp;:focus                                    |
| focus-within      | &amp;:focus-within                             |
| focus-visible     | &amp;:focus-visible                            |
| active            | &amp;:active                                   |
| visited           | &amp;:visited                                  |
| target            | &amp;:target                                   |
| first             | &amp;:first-child                              |
| last              | &amp;:last-child                               |
| only              | &amp;:only-child                               |
| odd               | &amp;:nth-child(odd)                           |
| even              | &amp;:nth-child(even)                          |
| first-of-type     | &amp;:first-of-type                            |
| last-of-type      | &amp;:last-of-type                             |
| only-of-type      | &amp;:only-of-type                             |
| empty             | &amp;:empty                                    |
| disabled          | &amp;:disabled                                 |
| enabled           | &amp;:enabled                                  |
| checked           | &amp;:checked                                  |
| indeterminate     | &amp;:indeterminate                            |
| default           | &amp;:default                                  |
| required          | &amp;:required                                 |
| valid             | &amp;:valid                                    |
| invalid           | &amp;:invalid                                  |
| in-range          | &amp;:in-range                                 |
| out-of-range      | &amp;:out-of-range                             |
| placeholder-shown | &amp;:placeholder-shown                        |
| autofill          | &amp;:autofill                                 |
| read-only         | &amp;:read-only                                |
| before            | &amp;::before                                  |
| after             | &amp;::after                                   |
| first-letter      | &amp;::first-letter                            |
| first-line        | &amp;::first-line                              |
| marker            | &amp;::marker                                  |
| selection         | &amp;::selection                               |
| file              | &amp;::file-selector-button                    |
| backdrop          | &amp;::backdrop                                |
| placeholder       | &amp;::placeholder                             |
| sm                | @media (min-width: 640px)                      |
| md                | @media (min-width: 768px)                      |
| lg                | @media (min-width: 1024px)                     |
| xl                | @media (min-width: 1280px)                     |
| 2xl               | @media (min-width: 1536px)                     |
| min-[…]           | @media (min-width: …)                          |
| max-sm            | @media not all and (min-width: 640px)          |
| max-md            | @media not all and (min-width: 768px)          |
| max-lg            | @media not all and (min-width: 1024px)         |
| max-xl            | @media not all and (min-width: 1280px)         |
| max-2xl           | @media not all and (min-width: 1536px)         |
| max-[…]           | @media (max-width: …)                          |
| dark              | @media (prefers-color-scheme: dark)            |
| portrait          | @media (orientation: portrait)                 |
| landscape         | @media (orientation: landscape)                |
| motion-safe       | @media (prefers-reduced-motion: no-preference) |
| motion-reduce     | @media (prefers-reduced-motion: reduce)        |
| contrast-more     | @media (prefers-contrast: more)                |
| contrast-less     | @media (prefers-contrast: less)                |
| print             | @media print                                   |
| supports-[…]      | @supports (…)                                  |
| aria-checked      | &amp;[aria-checked=“true”]                     |
| aria-disabled     | &amp;[aria-disabled=“true”]                    |
| aria-expanded     | &amp;[aria-expanded=“true”]                    |
| aria-hidden       | &amp;[aria-hidden=“true”]                      |
| aria-pressed      | &amp;[aria-pressed=“true”]                     |
| aria-readonly     | &amp;[aria-readonly=“true”]                    |
| aria-required     | &amp;[aria-required=“true”]                    |
| aria-selected     | &amp;[aria-selected=“true”]                    |
| aria-[…]          | &amp;[aria-…]                                  |
| data-[…]          | &amp;[data-…]                                  |
| rtl               | [dir=“rtl”] &amp;                              |
| ltr               | [dir=“ltr”] &amp;                              |
| open              | &amp;[open]                                    |
