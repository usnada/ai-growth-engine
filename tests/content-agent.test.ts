import { generate_content } from '../src/agents/content-agent';

describe('Content Generation Agent', () => {
  const mockBounty = {
    id: "bounty-123",
    title: "Implement new caching layer",
    scope: "Set up Redis for the main API routes",
    outcome: "Response times dropped by 40%"
  };

  it('should generate a tweet, a thread, and a blog post', async () => {
    const content = await generate_content(mockBounty);
    
    expect(content.tweet).toContain('Bounty Completed');
    expect(content.tweet).toContain(mockBounty.title);
    
    expect(content.thread.length).toBe(5);
    expect(content.thread[0]).toContain(mockBounty.title);
    expect(content.thread[1]).toContain(mockBounty.scope);
    expect(content.thread[2]).toContain(mockBounty.outcome);
    
    expect(content.blog_post).toContain(mockBounty.title);
    expect(content.blog_post).toContain(mockBounty.scope);
    expect(content.blog_post).toContain(mockBounty.outcome);
  });
});
