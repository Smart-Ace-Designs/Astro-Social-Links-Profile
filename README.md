# Frontend Mentor - Social links profile solution

This is a solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot
![social-links-profile](https://github.com/Smart-Ace-Designs/Astro-Social-Links-Profile/assets/132539186/98a0a3b9-bd55-454c-85b6-a59af95bfd5e)

### Links

- Solution URL: [GitHub](https://github.com/Smart-Ace-Designs/Astro-Social-Links-Profile)
- Live Site URL: [Netlify](https://smartacedesigns-astro-slp.netlify.app/)

## My process

### Built with

- Astro
- Astro [Space](https://github.com/Smart-Ace-Designs/Astro-Space) Template
- Tailwind CSS
- Flexbox
- CSS Grid
- Bun
- Mobile-first workflow

### What I learned

Using array and the map function to interate through the list of social media links.

```html
<div>
  <ul class="grid grid-cols-1 gap-y-4">
    { socialLinks.map((link) => (
    <li
      class="rounded-md bg-neutralGrey py-3 text-center text-sm font-semibold hover:bg-primaryGreen hover:text-neutralGrey"
    >
      <a href="{link.url}" target="_blank" class="block"> {link.name} </a>
    </li>
    )) }
  </ul>
</div>
```

### Continued development

- Astro components

### Useful resources

- [Tailwind CSS Cheat Sheet](https://tailwindcomponents.com/cheatsheet/)
- [Microsoft Bing Copilot](https://www.bing.com/chat?form=NTPCHB)

## Author

- Website - [Smart Ace Designs (GitHub)](https://github.com/Smart-Ace-Designs)
- Frontend Mentor - [@smart-ace-designs](https://www.frontendmentor.io/profile/Smart-Ace-Designs)

## Acknowledgments

- [Practical Web Dev](https://www.youtube.com/@PracticalWebDev)
