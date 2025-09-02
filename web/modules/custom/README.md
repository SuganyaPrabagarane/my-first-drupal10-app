**1.  HelloNameController (using render array)**

``` php
return [
  '#markup' => $this->t('Hello, Mrs.Prabagarane'),
];
```

✅ Drupal way of returning output.

It returns a render array, which Drupal's rendering system later
converts into HTML.

**Benefits:**

-   Integrates with Drupal's caching system.
-   Allows theming and preprocessing.
-   Can be combined with other renderable elements (#theme, #type,
    blocks, views, etc.).
-   Translation-ready with \$this-\>t().

------------------------------------------------------------------------

**2.  NameController (using Symfony Response)**

``` php
return new Response('Hello - Suganya Prabagarane');
```

✅ More of a Symfony way (Drupal is built on Symfony).

It bypasses Drupal's render system and returns a raw HTTP response
directly.

**Benefits:**

-   Useful when you need to return JSON, files, custom headers, or
    binary data.
-   More control over HTTP response (status codes, headers, etc.).

**Downsides:**

-   Skips Drupal's render pipeline, so no Drupal caching or theming.
-   Not automatically translatable.

------------------------------------------------------------------------

🚀 **In summary:**

-   **Render array (#markup)** → Use when you want Drupal to handle
    output, theming, caching, and translations. Best for normal pages.
-   **Response object** → Use when you need raw output, custom headers,
    JSON APIs, file downloads, or want to bypass Drupal's rendering
    system.
