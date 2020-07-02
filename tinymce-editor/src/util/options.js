export const options = {
  styleMap: [
    "p[style-name='Section Title'] => h1:fresh",
    "p[style-name='Subsection Title'] => h2:fresh",
    'p.Bullet1 => ul > li:fresh',
    'p.Bullet2 => ul > li:fresh > ul > li:fresh'
  ],
  includeDefaultStyleMap: false
};

function something() {
  return {
    name: 'arish'
  }
}