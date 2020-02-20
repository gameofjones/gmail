import { Message, MessagePart } from "../models/gmail"

const randomDate = (): string => {
  return new Date(+(new Date()) - Math.floor(Math.random()*10000000000)).toDateString()
}

const examplePayload1: MessagePart = {
  headers: [
    { name: "from", value: "Vineet" },
    { name: "subject", value: "Package Process" },
    { name: "date", value: randomDate() },
  ],
  mimeType: "text/html",
  body: {
    data: "PHA+SGVsbG8gVGVhbSw8L3A+IAo8cD4KICBBdHRhY2hpbmcgdGhpcyBkb2N1bWVudCB0byB0aGUgZW1haWwgdGhyZWFkLgo8L3A+IAo8cD4KICBUaGlzIGhhcyBhbHNvIGJlZW4gcG9zdGVkIGFuZCBwaW5uZWQgb24gdGhlIHNsYWNrIGNoYW5uZWwuCjwvcD4KPHA+CiAgIEhhcHB5IE1vbmRheSDwn5iDCjwvcD4KPHA+CiAgUmVnYXJkcywgPGJyLz5WaW5lZXQKPC9wPg==",
  }
}

const examplePayload2: MessagePart = {
  headers:[
    { name: "from", value: "author@gmail.com" },
    { name: "subject", value: "Second Email" },
    { name: "date", value: randomDate() },
    { name: "to", value: "Kiah Jones" },
    { name: "to", value: "Madhu" },
  ],
  mimeType: "text/html",
  body: {
    data: "PGgxPkVudGVyIHRoZSBtYWluIGhlYWRpbmcsIHVzdWFsbHkgdGhlIHNhbWUgYXMgdGhlIHRpdGxlLjwvaDE+CjxwPkJlIDxiPmJvbGQ8L2I+IGluIHN0YXRpbmcgeW91ciBrZXkgcG9pbnRzLiBQdXQgdGhlbSBpbiBhIGxpc3Q6IDwvcD4KPHVsPgo8bGk+VGhlIGZpcnN0IGl0ZW0gaW4geW91ciBsaXN0PC9saT4KPGxpPlRoZSBzZWNvbmQgaXRlbTsgPGk+aXRhbGljaXplPC9pPiBrZXkgd29yZHM8L2xpPgo8L3VsPgo8cD5JbXByb3ZlIHlvdXIgaW1hZ2UgYnkgaW5jbHVkaW5nIGFuIGltYWdlLiA8L3A+CjxwPjxpbWcgc3JjPSJodHRwczovL2ltYWdlcy1uYS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTFNU2FidnplSEwuX0FDX1VMMzIwX1NSMjU0LDMyMF8uanBnIiBhbHQ9IkEgR3JlYXQgSFRNTCBSZXNvdXJjZSI+PC9wPgo8cD5BZGQgYSBsaW5rIHRvIHlvdXIgZmF2b3JpdGUgPGEgaHJlZj0iaHR0cHM6Ly93d3cuZHVtbWllcy5jb20vIj5XZWIgc2l0ZTwvYT4uCkJyZWFrIHVwIHlvdXIgcGFnZSB3aXRoIGEgaG9yaXpvbnRhbCBydWxlIG9yIHR3by4gPC9wPgo8aHI+CjxwPkZpbmFsbHksIGxpbmsgdG8gPGEgaHJlZj0icGFnZTIuaHRtbCI+YW5vdGhlciBwYWdlPC9hPiBpbiB5b3VyIG93biBXZWIgc2l0ZS48L3A+CjwhLS0gQW5kIGFkZCBhIGNvcHlyaWdodCBub3RpY2UuLS0+CjxwPiYjMTY5OyBXaWxleSBQdWJsaXNoaW5nLCAyMDExPC9wPg==",
  }
}

const examplePayload3: MessagePart = {
  headers:[
    { name: "from", value: "Kiah Jones" },
    { name: "subject", value: "Third Email with a longer name ya'llvgvggggggggg" },
    { name: "date", value: randomDate() },
  ],
  mimeType: "text/html",
  body: {
    data: "PCEtLSAjIyMjIyMjICBZQVksIEkgQU0gVEhFIFNPVVJDRSBFRElUT1IhICMjIyMjIyMjIy0tPgo8aDEgc3R5bGU9ImNvbG9yOiAjNWU5Y2EwOyIgZGF0YS1kYXJrcmVhZGVyLWlubGluZS1jb2xvcj0iIj5Zb3UgY2FuIGVkaXQgPHNwYW4gc3R5bGU9ImNvbG9yOiAjMmIyMzAxOyIgZGF0YS1kYXJrcmVhZGVyLWlubGluZS1jb2xvcj0iIj50aGlzIGRlbW88L3NwYW4+IHRleHQhPC9oMT4KPGgyIHN0eWxlPSJjb2xvcjogIzJlNmM4MDsiIGRhdGEtZGFya3JlYWRlci1pbmxpbmUtY29sb3I9IiI+SG93IHRvIHVzZSB0aGUgZWRpdG9yOjwvaDI+CjxwPlBhc3RlIHlvdXIgZG9jdW1lbnRzIGluIHRoZSB2aXN1YWwgZWRpdG9yIG9uIHRoZSBsZWZ0IG9yIHlvdXIgSFRNTCBjb2RlIGluIHRoZSBzb3VyY2UgZWRpdG9yIGluIHRoZSByaWdodC4gPGJyIC8+RWRpdCBhbnkgb2YgdGhlIHR3byBhcmVhcyBhbmQgc2VlIHRoZSBvdGhlciBjaGFuZ2luZyBpbiByZWFsIHRpbWUuJm5ic3A7PC9wPgo8cD5DbGljayB0aGUgPHNwYW4gc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICMyYjIzMDE7IGNvbG9yOiAjZmZmOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHBhZGRpbmc6IDNweCAxMHB4OyBmb250LXdlaWdodDogYm9sZDsgYm9yZGVyLXJhZGl1czogNXB4OyIgZGF0YS1kYXJrcmVhZGVyLWlubGluZS1iZ2NvbG9yPSIiIGRhdGEtZGFya3JlYWRlci1pbmxpbmUtY29sb3I9IiI+Q2xlYW48L3NwYW4+IGJ1dHRvbiB0byBjbGVhbiB5b3VyIHNvdXJjZSBjb2RlLjwvcD4KPGgyIHN0eWxlPSJjb2xvcjogIzJlNmM4MDsiIGRhdGEtZGFya3JlYWRlci1pbmxpbmUtY29sb3I9IiI+U29tZSB1c2VmdWwgZmVhdHVyZXM6PC9oMj4KPG9sIHN0eWxlPSJsaXN0LXN0eWxlOiBub25lOyBmb250LXNpemU6IDE0cHg7IGxpbmUtaGVpZ2h0OiAzMnB4OyBmb250LXdlaWdodDogYm9sZDsiPgo8bGkgc3R5bGU9ImNsZWFyOiBib3RoOyI+PGltZyBzdHlsZT0iZmxvYXQ6IGxlZnQ7IiBzcmM9Imh0dHBzOi8vaHRtbC1vbmxpbmUuY29tL2ltZy8wMS1pbnRlcmFjdGl2ZS1jb25uZWN0aW9uLnBuZyIgYWx0PSJpbnRlcmFjdGl2ZSBjb25uZWN0aW9uIiB3aWR0aD0iNDUiIC8+IEludGVyYWN0aXZlIHNvdXJjZSBlZGl0b3I8L2xpPgo8bGkgc3R5bGU9ImNsZWFyOiBib3RoOyI+PGltZyBzdHlsZT0iZmxvYXQ6IGxlZnQ7IiBzcmM9Imh0dHBzOi8vaHRtbC1vbmxpbmUuY29tL2ltZy8wMi1odG1sLWNsZWFuLnBuZyIgYWx0PSJodG1sIGNsZWFuZXIiIHdpZHRoPSI0NSIgLz4gSFRNTCBDbGVhbmluZzwvbGk+CjxsaSBzdHlsZT0iY2xlYXI6IGJvdGg7Ij48aW1nIHN0eWxlPSJmbG9hdDogbGVmdDsiIHNyYz0iaHR0cHM6Ly9odG1sLW9ubGluZS5jb20vaW1nLzAzLWRvY3MtdG8taHRtbC5wbmciIGFsdD0iV29yZCB0byBodG1sIiB3aWR0aD0iNDUiIC8+IFdvcmQgdG8gSFRNTCBjb252ZXJzaW9uPC9saT4KPGxpIHN0eWxlPSJjbGVhcjogYm90aDsiPjxpbWcgc3R5bGU9ImZsb2F0OiBsZWZ0OyIgc3JjPSJodHRwczovL2h0bWwtb25saW5lLmNvbS9pbWcvMDQtcmVwbGFjZS5wbmciIGFsdD0icmVwbGFjZSB0ZXh0IiB3aWR0aD0iNDUiIC8+IEZpbmQgYW5kIFJlcGxhY2U8L2xpPgo8bGkgc3R5bGU9ImNsZWFyOiBib3RoOyI+PGltZyBzdHlsZT0iZmxvYXQ6IGxlZnQ7IiBzcmM9Imh0dHBzOi8vaHRtbC1vbmxpbmUuY29tL2ltZy8wNS1naWJiZXJpc2gucG5nIiBhbHQ9ImdpYmJlcmlzaCIgd2lkdGg9IjQ1IiAvPiBMb3JlbS1JcHN1bSBnZW5lcmF0b3I8L2xpPgo8bGkgc3R5bGU9ImNsZWFyOiBib3RoOyI+PGltZyBzdHlsZT0iZmxvYXQ6IGxlZnQ7IiBzcmM9Imh0dHBzOi8vaHRtbC1vbmxpbmUuY29tL2ltZy82LXRhYmxlLWRpdi1odG1sLnBuZyIgYWx0PSJodG1sIHRhYmxlIGRpdiIgd2lkdGg9IjQ1IiAvPiBUYWJsZSB0byBESVYgY29udmVyc2lvbjwvbGk+Cjwvb2w+CjxwPiZuYnNwOyAmbmJzcDsgJm5ic3A7ICZuYnNwOyAmbmJzcDsgJm5ic3A7ICZuYnNwOzwvcD4KPGgyIHN0eWxlPSJjb2xvcjogIzJlNmM4MDsiIGRhdGEtZGFya3JlYWRlci1pbmxpbmUtY29sb3I9IiI+Q2xlYW5pbmcgb3B0aW9uczo8L2gyPgo8dGFibGUgY2xhc3M9ImVkaXRvckRlbW9UYWJsZSI+Cjx0aGVhZD4KPHRyPgo8dGQ+TmFtZSBvZiB0aGUgZmVhdHVyZTwvdGQ+Cjx0ZD5FeGFtcGxlPC90ZD4KPHRkPkRlZmF1bHQ8L3RkPgo8L3RyPgo8L3RoZWFkPgo8dGJvZHk+Cjx0cj4KPHRkPlJlbW92ZSB0YWcgYXR0cmlidXRlczwvdGQ+Cjx0ZD48aW1nIHN0eWxlPSJtYXJnaW46IDFweCAxNXB4OyIgc3JjPSJpbWFnZXMvc21pbGV5LnBuZyIgYWx0PSJsYXVnaGluZyIgd2lkdGg9IjQwIiBoZWlnaHQ9IjE2IiAvPiAoZXhjZXB0IDxzdHJvbmc+aW1nPC9zdHJvbmc+LTxlbT5zcmM8L2VtPiBhbmQgPHN0cm9uZz5hPC9zdHJvbmc+LTxlbT5ocmVmPC9lbT4pPC90ZD4KPHRkPiZuYnNwOzwvdGQ+CjwvdHI+Cjx0cj4KPHRkPlJlbW92ZSBpbmxpbmUgc3R5bGVzPC90ZD4KPHRkPjxzcGFuIHN0eWxlPSJjb2xvcjogZ3JlZW47IGZvbnQtc2l6ZTogMTNweDsiIGRhdGEtZGFya3JlYWRlci1pbmxpbmUtY29sb3I9IiI+WW91IDxzdHJvbmcgc3R5bGU9ImNvbG9yOiBibHVlOyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsiIGRhdGEtZGFya3JlYWRlci1pbmxpbmUtY29sb3I9IiI+c2hvdWxkIG5ldmVyPC9zdHJvbmc+Jm5ic3A7dXNlIGlubGluZSBzdHlsZXMhPC9zcGFuPjwvdGQ+Cjx0ZD48c3Ryb25nIHN0eWxlPSJmb250LXNpemU6IDE3cHg7IGNvbG9yOiAjMmIyMzAxOyIgZGF0YS1kYXJrcmVhZGVyLWlubGluZS1jb2xvcj0iIj54PC9zdHJvbmc+PC90ZD4KPC90cj4KPHRyPgo8dGQ+UmVtb3ZlIGNsYXNzZXMgYW5kIElEczwvdGQ+Cjx0ZD48c3BhbiBpZD0iZGVtb0lkIj5Vc2UgY2xhc3NlcyB0byA8c3Ryb25nIGNsYXNzPSJkZW1vQ2xhc3MiPnN0eWxlIGV2ZXJ5dGhpbmc8L3N0cm9uZz4uPC9zcGFuPjwvdGQ+Cjx0ZD48c3Ryb25nIHN0eWxlPSJmb250LXNpemU6IDE3cHg7IGNvbG9yOiAjMmIyMzAxOyIgZGF0YS1kYXJrcmVhZGVyLWlubGluZS1jb2xvcj0iIj54PC9zdHJvbmc+PC90ZD4KPC90cj4KPHRyPgo8dGQ+UmVtb3ZlIGFsbCB0YWdzPC90ZD4KPHRkPlRoaXMgbGVhdmVzIDxzdHJvbmcgc3R5bGU9ImNvbG9yOiBibHVlOyIgZGF0YS1kYXJrcmVhZGVyLWlubGluZS1jb2xvcj0iIj5vbmx5IHRoZSBwbGFpbjwvc3Ryb25nPiA8ZW0+dGV4dDwvZW0+LiA8aW1nIHN0eWxlPSJtYXJnaW46IDFweDsiIHNyYz0iaW1hZ2VzL3NtaWxleS5wbmciIGFsdD0ibGF1Z2hpbmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgLz48L3RkPgo8dGQ+Jm5ic3A7PC90ZD4KPC90cj4KPHRyPgo8dGQ+UmVtb3ZlIHN1Y2Nlc3NpdmUgJmFtcDtuYnNwO3M8L3RkPgo8dGQ+TmV2ZXIgdXNlIG5vbi1icmVha2luZyBzcGFjZXMmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDt0byBzZXQgbWFyZ2lucy48L3RkPgo8dGQ+PHN0cm9uZyBzdHlsZT0iZm9udC1zaXplOiAxN3B4OyBjb2xvcjogIzJiMjMwMTsiIGRhdGEtZGFya3JlYWRlci1pbmxpbmUtY29sb3I9IiI+eDwvc3Ryb25nPjwvdGQ+CjwvdHI+Cjx0cj4KPHRkPlJlbW92ZSBlbXB0eSB0YWdzPC90ZD4KPHRkPkVtcHR5IHRhZ3Mgc2hvdWxkIGdvITwvdGQ+Cjx0ZD4mbmJzcDs8L3RkPgo8L3RyPgo8dHI+Cjx0ZD5SZW1vdmUgdGFncyB3aXRoIG9uZSAmYW1wO25ic3A7PC90ZD4KPHRkPlRoaXMgbWFrZXMmbmJzcDtubyBzZW5zZSE8L3RkPgo8dGQ+PHN0cm9uZyBzdHlsZT0iZm9udC1zaXplOiAxN3B4OyBjb2xvcjogIzJiMjMwMTsiIGRhdGEtZGFya3JlYWRlci1pbmxpbmUtY29sb3I9IiI+eDwvc3Ryb25nPjwvdGQ+CjwvdHI+Cjx0cj4KPHRkPlJlbW92ZSBzcGFuIHRhZ3M8L3RkPgo8dGQ+U3BhbiB0YWdzIHdpdGggPHNwYW4gc3R5bGU9ImNvbG9yOiBncmVlbjsgZm9udC1zaXplOiAxM3B4OyIgZGF0YS1kYXJrcmVhZGVyLWlubGluZS1jb2xvcj0iIj5hbGwgc3R5bGVzPC9zcGFuPjwvdGQ+Cjx0ZD48c3Ryb25nIHN0eWxlPSJmb250LXNpemU6IDE3cHg7IGNvbG9yOiAjMmIyMzAxOyIgZGF0YS1kYXJrcmVhZGVyLWlubGluZS1jb2xvcj0iIj54PC9zdHJvbmc+PC90ZD4KPC90cj4KPHRyPgo8dGQ+UmVtb3ZlIGltYWdlczwvdGQ+Cjx0ZD5JIGFtIGFuIGltYWdlOiA8aW1nIHNyYz0iaW1hZ2VzL3NtaWxleS5wbmciIGFsdD0ibGF1Z2hpbmciIC8+PC90ZD4KPHRkPiZuYnNwOzwvdGQ+CjwvdHI+Cjx0cj4KPHRkPlJlbW92ZSBsaW5rczwvdGQ+Cjx0ZD48YSBocmVmPSJodHRwczovL2h0bWwtb25saW5lLmNvbSI+VGhpcyBpczwvYT4gYSBsaW5rLjwvdGQ+Cjx0ZD4mbmJzcDs8L3RkPgo8L3RyPgo8dHI+Cjx0ZD5SZW1vdmUgdGFibGVzPC90ZD4KPHRkPlRha2VzIGV2ZXJ5dGhpbmcgb3V0IG9mIHRoZSB0YWJsZS48L3RkPgo8dGQ+Jm5ic3A7PC90ZD4KPC90cj4KPHRyPgo8dGQ+UmVwbGFjZSB0YWJsZSB0YWdzIHdpdGggc3RydWN0dXJlZCBkaXZzPC90ZD4KPHRkPlRoaXMgdGV4dCBpcyBpbnNpZGUgYSB0YWJsZS48L3RkPgo8dGQ+Jm5ic3A7PC90ZD4KPC90cj4KPHRyPgo8dGQ+UmVtb3ZlIGNvbW1lbnRzPC90ZD4KPHRkPlRoaXMgaXMgb25seSB2aXNpYmxlIGluIHRoZSBzb3VyY2UgZWRpdG9yIDwhLS0gSEVMTE8hIC0tPjwvdGQ+Cjx0ZD48c3Ryb25nIHN0eWxlPSJmb250LXNpemU6IDE3cHg7IGNvbG9yOiAjMmIyMzAxOyIgZGF0YS1kYXJrcmVhZGVyLWlubGluZS1jb2xvcj0iIj54PC9zdHJvbmc+PC90ZD4KPC90cj4KPHRyPgo8dGQ+RW5jb2RlIHNwZWNpYWwgY2hhcmFjdGVyczwvdGQ+Cjx0ZD48c3BhbiBzdHlsZT0iY29sb3I6IHJlZDsgZm9udC1zaXplOiAxN3B4OyIgZGF0YS1kYXJrcmVhZGVyLWlubGluZS1jb2xvcj0iIj4maGVhcnRzOzwvc3Bhbj4gPHN0cm9uZyBzdHlsZT0iZm9udC1zaXplOiAyMHB4OyI+4pi6IOKYhTwvc3Ryb25nPiAmZ3Q7Jmx0OzwvdGQ+Cjx0ZD48c3Ryb25nIHN0eWxlPSJmb250LXNpemU6IDE3cHg7IGNvbG9yOiAjMmIyMzAxOyIgZGF0YS1kYXJrcmVhZGVyLWlubGluZS1jb2xvcj0iIj54PC9zdHJvbmc+PC90ZD4KPC90cj4KPHRyPgo8dGQ+U2V0IG5ldyBsaW5lcyBhbmQgdGV4dCBpbmRlbnRzPC90ZD4KPHRkPk9yZ2FuaXplIHRoZSB0YWdzIGluIGEgbmljZSB0cmVlIHZpZXcuPC90ZD4KPHRkPiZuYnNwOzwvdGQ+CjwvdHI+CjwvdGJvZHk+CjwvdGFibGU+CjxwPjxzdHJvbmc+Jm5ic3A7PC9zdHJvbmc+PC9wPgo8cD48c3Ryb25nPlNhdmUgdGhpcyBsaW5rIGludG8geW91ciBib29rbWFya3MgYW5kIHNoYXJlIGl0IHdpdGggeW91ciBmcmllbmRzLiBJdCBpcyBhbGwgRlJFRSEgPC9zdHJvbmc+PGJyIC8+PHN0cm9uZz5FbmpveSE8L3N0cm9uZz48L3A+CjxwPjxzdHJvbmc+Jm5ic3A7PC9zdHJvbmc+PC9wPg==",
  }
}

const Messages: { [key: string]: Message[] } = {
  "1": [
    {
      id: "1",
      payload: examplePayload1,
    },
    {
      id: "2",
      payload: examplePayload2,
    },
    {
      id: "3",
      payload: examplePayload3,
    },
  ],
  "2": [],
  "3": [
    {
      id: "4",
      payload: examplePayload1,
    },
  ],
  "4": [],
  "5": [],
  "6": [
    {
      id: "5",
      payload: examplePayload2,
    },
  ],
  "7": [
    {
      id: "6",
      payload: examplePayload3,
    },
  ],
  "8": [
    {
      id: "7",
      payload: examplePayload1,
    },
    {
      id: "8",
      payload: examplePayload2,
    },
    {
      id: "9",
      payload: examplePayload3,
    },
    {
      id: "10",
      payload: examplePayload1,
    },
    {
      id: "11",
      payload: examplePayload2,
    },
    {
      id: "12",
      payload: examplePayload3,
    },
    {
      id: "13",
      payload: examplePayload1,
    },
    {
      id: "14",
      payload: examplePayload2,
    },
    {
      id: "15",
      payload: examplePayload3,
    },
    {
      id: "16",
      payload: examplePayload1,
    },
    {
      id: "17",
      payload: examplePayload2,
    },
  ],
  "9": [],
  "10": [
    {
      id: "18",
      payload: examplePayload3,
    },
    {
      id: "19",
      payload: examplePayload1,
    },
  ],
}

export default Messages
