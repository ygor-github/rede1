
import React from 'react';

const TechStack: React.FC = () => {
  const logos = [
    { name: 'Docker', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkBL_0mtsdxNJTLYp3nDurquaVwWk2qSnl0_Aq6UMByV_w4fAgLzyu4rzxoG0HkmSh0VDhGpiD4Drxtj2X6Og5wIS6BZY8N46OcTZEdObZ-S28UxoyPQt0SGyLJ-opq9PKmAjZHNUGfUBn9cYrOyGVxCTeMgP4Ec7Q8ZkvbYxEMuXlBQhmvJIDMmk7KfB0jEL_gCqGPj54955tztExhjgHwu82L9dwEtL_elrIaQ2iZDRz0tUJJunYE0ybMXhkpvOp8FV24AhChtmQ' },
    { name: 'n8n', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDODO8zonvHfhejNkkKimMkBX5T2akruE8KdKnko5HxcYGcxOvuRJDGI3oC8j-jOyEBH-qDWpjmXh24qKWmx2FHKoxxSkRY33OegAD4p7CjiXhFs32ZMBTCb0y8vjmh3FGOq6PP93LV_UUBngf4tRNFoR2ldu4nIJfJKFBulEvuudCCaVKtggeqaKqj2dP-24eqcIEzWO35JtYHRmOIiPfZgbnQgnzXBF8rDPIzs-6QjlUTsdCz1fLi7aZtHeiutqUk6AVOL2e1jGaL' },
    { name: 'Python', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzzBhf7Rt4J9SlK4dCTrKMntna1JNk9QonLC8V-nNEWY7xYYpMjOUne4KwwAjP2W2l4QNdrEughM1OZsK_B-DVtbVFGGZ70DpVfJCZuGGMTs9YgznLUwrOcmLtEpzzVAMmGbSIsT8LZIjEfGw4vfF9KKBuFXn5ij1vrsoMPpD7pHEUpiACGmeUWkUMBmrZ6OVUKuWA1UdPnIAEz6P6ZoWaQyXj3aAPRBsr7Q4f1tQDZ6CuZPhQEMevoWeP_5BHJwqNgw-UGrGnzART' },
    { name: 'Linux', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6Yl3Rfy7X240_Ps-fHZHGI-rfajJMcFMBWececO1S3LdB66SItUZ4z0Mvv6xfD_XOBX5qpp73BjjUvmyfgQzxQFT25adgTLe9QwiF_sKxK35Qczg8CFSAetbyYAfOFhPq5VYOn-rUrN4ObqWUINx3E9p20V8T83eJ880ClFGPWELM4sXgIWaCBq1pWvzH7nHKnTai3Y0sNooqdDhKHDteJCujjJkJc0ftamxndy_rK_B_fNkALB8TrgzqqjD7J3egl23K-mswm64zUe' },
    { name: 'Odoo', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMHaD0KjUzqi1xZmjD8RVsQkO-jd-qbL93t1cRwb6gIzQlOWZz-bnp5JKDwJZUppk2S77IX89sg_4ADnm3f7iqq6lT889fAKvBv-d6C7dkHTfJN1jkVLxCUhBKDyEFukynN8QX3YD2F48wJbl9RIQi8BCvi5pFmCUpqwTE5iRDVoKg-cMPI6VJMecMyfYMCV8vaFLlYBDK0Gzs6IMl-XKBfEeh9AK7FU1yoBA-nBKy8qQyu32rap9bPEQXhyJLgoSpytL41hrLYS' },
  ];

  return (
    <section className="py-20 border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">

        <h2 className="text-center text-white/90 text-xs font-black uppercase tracking-[0.4em] mb-16">
          Tecnologias que dominamos
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
          {logos.map((logo, i) => (
            <img key={i} alt={`${logo.name} Logo`} className="h-8 lg:h-10 w-auto object-contain" src={logo.url} width={120} height={40} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
