import stuff from './savageCodex';

function getGuideList (){
  return stuff.guides.map(({ slug, title }) => ({ slug, title }));
}

function getGuide (slug, stepSlug) {
  const { title, firstSteps, steps } = stuff.guides.find(g => g.slug === slug);
  const { title, slug, description, include, nextSteps } = steps.find(s => s.slug === stepSlug);
  const stepContent = {

  };
  
  return {
    slug,
    title,
    nextSteps: (nextSteps || firstSteps).reduce((acc, codexSlug) => {
    acc.push({
      slug: codexSlug,
      title: steps.find(s => s.slug === codexSlug).title
    });
    return acc;
  }, []),
  stepContent: stepSlug && getGuideStepContent(slug, stepSlug)
  }
}

export default {
  getGuide,
  getGuideList,
  getGuideStep
}