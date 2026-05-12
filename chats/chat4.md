# GPU Cost Analysis

_Started 2026-05-11 18:08 UTC_

---

## User

Date: 28 Nov 2025, Semi Analysis					
Chip	Unit	GB200	GB300	TPU v7 (Internal)	TPU v7 (External) 
Customer Profile		Hyperscaler	Hyperscaler	Hyperscaler	Neocloud
Total Cost per Unit Hour	USD/GPU/Hour	2.28	2.73	1.28	1.6
Capital Cost as % of TCO	%	77.40%	79%	72.70%	72.70%
					
Marketed as TFLOPS (BF16)	TFLOPS	2500	2500	2307	2307
Marketed as TFLOPS (8 Bit)	TFLOPS	5000	5000	4614	4614
Marketed TFLOPS (FP4)	TFLOPS	10000	15000	4614	4614
Memory Bandwidth per Logical GPU	TB/s	8	8	7.6	7.6
Memory Capacity 	GB	192	288	16	32
Marketed TFLOPS (FP8) / Memory Bandwidth	TFLOPS/TB/s	625	625	609	609
					
TCO per Marketed BF16 Dense PFLOP	$/hr per PFLOP	0.91	1.09	0.56	0.69
TCO per Marketed 8 Bit Dense PFLOP	$/hr per PFLOP	0.46	0.55	0.28	0.35
TCO per Marketed FP4 Dense PFLOP	$/hr per PFLOP	0.23	0.18	0.28	0.35
TCO per Memory Bandwidth	$/hr per TB/s	0.28	0.34	0.17	0.21
TCO per Memory Capacity	$/hr per TB/s	11.87	9.47	6.67	8.33
					
1 GW Factory, $Billion Cost		OpenAI - NVDA	Anthropic NVDA MSFT		
NVDA GPU 	$B/GW	$22	$22		
Rest of System (Infiniband, storage, etc)	$B/GW	$12	$12		
Critical IT Content	$B/GW	34	34		
		$68	$68		
Nvidia Investment	$B/GW	10	5		
Microsoft Equity Rebate	$B/GW	0	10		
Partner Discount*****		29%	44%		

Can you put the table on the above for 06.2 and 06.3

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

I'll replace the contents of 06.2 and 06.3 with the SemiAnalysis chip TCO table and the 1 GW factory cost table, following the same monospace-grid pattern used in 06.1.

_[tool: done]_

_[tool: snip]_

Dropped the SemiAnalysis (28 Nov 2025) data into 06.2 and 06.3, matching the monospace grid pattern used by 06.1:

- **06.2** — full chip-by-chip TCO comparison across GB200, GB300, TPU v7 internal/external, broken into Cost / Performance / TCO-per-unit sections, plus three callout cards (FP4 winner, BF16 winner, capacity catch).
- **06.3** — 1 GW factory cost breakdown (line items + vendor financing), with two side-by-side cards showing the net cost per GW for each deal structure ($58B vs $53B).

The previous "stack as I draw it" and "five layers" content was replaced — let me know if you'd rather keep that and slot the tables in as new sub-sections instead.

## User

for the component-level detail per node, can you remove the drop down

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

Done — replaced the `<details>` dropdown with an always-expanded section using the same "Component-level detail" caption header that matches the rest of 06.1's section labels.

## User

Try to include this on the references from ex-colleagues, at section 01.1
, but in a beautiful way

## Assistant

_[tool: invoke_skill]_

_[tool: grep]_

_[tool: run_script]_

_[tool: grep]_

_[tool: read_file]_

_[tool: snip]_

_[tool: grep]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: run_script]_

_[tool: copy_files]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

Replaced the bullet list with a proper CV card — three-section layout (Experience / Education / Languages, skills & interests), monospace dates + locations in a left rail, coral hairline bullets, and a "Download PDF" button that pulls the original from `site/files/`. The "Reviews from Ex-Colleagues" letter sits right below it so the page reads as: profile → CV → letter.

## User

Put parts of these two in the fun facts about me and remove the existing stuff

## Assistant

## User

Put the pictures above in the "about" section

## Assistant

_[tool: copy_files]_

_[tool: grep]_

_[tool: read_file]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: snip]_

_[tool: run_script]_

_[tool: snip]_

_[tool: done]_

_[tool: snip]_

## Assistant

## User

Apply drawing

## Assistant

_[tool: view_image]_

_[tool: snip]_

## User

Apply 2 direct edits:
1. In site/about.html: change the text from "On my last day at the bank, the team passed around a notebook. Two of the entries say more about how I work — and how I’m wired — than anything I could write about myself." to "Written by my ex-colleagues on my last week at work".
<mentioned-element>
dom:      body[screen="01 About"] › main › section.section › div.wrap › div.two-col › div.prose › p[2/2]
text:     "On my last day at the bank, the team passed around a notebo…"
children: text
selector: div:nth-child(7) p
id:       cc-2
</mentioned-element>
2. In site/about.html: change the text from "Notes from colleagues" to "Notes from ex-colleagues".
<mentioned-element>
dom:      body[screen="01 About"] › main › section.section › div.wrap › div.two-col › div.prose › h2[1/2]
text:     "Notes from colleagues"
children: text
selector: div:nth-child(7) :is(h1,h2,h3,h4,h5,h6)
id:       cc-3
</mentioned-element>

## Assistant

## User

Apply comment

## Assistant

_[tool: str_replace_edit]_

Done — the Ayushi quote on About now reads "Tiff you make me believe that as a species we are not so doomed afterall".

## User

Apply a direct edit. In site/about.html: change the text from "Written by my ex-colleagues on my last week at work" to "\n".
<mentioned-element>
dom:      body[screen="01 About"] › main › section.section › div.wrap › div.two-col › div.prose › p[2/2]
text:     "Written by my ex-colleagues on my last week at work"
children: text
selector: div:nth-child(7) p
id:       cc-2
</mentioned-element>

## Assistant

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: grep]_

_[tool: str_replace_edit]_

## Assistant

## User

can you remove this section: 04.3 where the open ground is

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

## Assistant

_[tool: str_replace_edit]_

Removed section 04.3 from `site/landscape.html`.

## User

Apply a direct edit. In site/about.html: change the text from "The Anna Karenina principle states that for success to happen, multiple key things must be met simultaneously. The absence of one important element can cause failure.\n\nIf I must choose 3 most important things - it would be distribution, product and running out of money." to "The Anna Karenina principle states that for success to happen, multiple key things must be met simultaneously. The absence of one important element can cause failure.\n\nIf I must choose the 3 most important things - it would be distribution, product and running out of money.".
<mentioned-element>
dom:      body[screen="05 Strategy"] › … › section.section › div.wrap › div.two-col › div.prose › p.lede-p[1/3]
text:     "The Anna Karenina principle states that for success to happ…"
children: text, br, br, text
selector: .lede-p
id:       cc-2
</mentioned-element>

## Assistant

## Assistant

## User

Apply 3 direct edits:
1. In site/about.html: change the text from "I see distribution as a flywheel, where if one major client signs up, that is an incentive for others to sign up. Every country is on a rush to have an AI strategy.\n\nWhen I was interning in the AISC lab, a job I got from cold-calling, the deal to invest $HK 3B in datacenters was done in a week.\n\nFor sales, one can never be perfect vs the competition. The strategy is about framing the solution you deliver. If you are paid $100,000 for a job, is that your actual value? Consider a simple transaction: If someone buys a newspaper for $1, they do so because they value the information more than $1. Conversely, the company sells it because they value $1 more than the newspaper. Value is inherently subjective - framing it correctly matters." to "Distribution functions as a flywheel: \nonce a major client signs on, it creates momentum that draws others in. Every country is racing to establish its AI strategy, and no one wants to be left behind. \n\n\nThe power of cold outreach shouldn't be underestimated. During my internship at the AISC lab - a role I landed through cold calling - I learned that the government moved fast - closing a HK$3B datacenter investment deal in under a week, a direct response to the Nvidia ban.\n\n\nIn sales, I've always believed that chasing perfection against the competition is a trap. The real game is framing. Consider the economics of a simple newspaper transaction: the buyer pays $1 because the value the information more than the dollar; the seller accepts $1 because they value it more than the paper. Value is entirely subjective - and that subjectivity is the opening. If someone pays you $100,000, the figure isn't your objective worth. It is what they believe they will get in return. Master the framing, and you will improve the number. ".
<mentioned-element>
dom:      body[screen="05 Strategy"] › main › … › div.wrap › div.grid-3 › div.card-outline › p[3/3]
text:     "I see distribution as a flywheel, where if one major client…"
children: text, br, br, text, br, br, text
selector: .card-outline >[spellcheck]
id:       cc-3
</mentioned-element>
2. In site/about.html: change the text from "The Anna Karenina principle states that for success to happen, multiple key things must be met simultaneously. The absence of one important element can cause failure.\n\nIf I must choose the 3 most important things - it would be distribution, product and running out of money." to "The Anna Karenina principle states that for success to happen, multiple key things must be met simultaneously. The absence of one important element can cause failure.\n\nIf I must choose the 3 most important things - it would be distribution, product and the \"open\" strategy".
<mentioned-element>
dom:      body[screen="05 Strategy"] › … › section.section › div.wrap › div.two-col › div.prose › p.lede-p[1/3]
text:     "The Anna Karenina principle states that for success to happ…"
children: text, br, br, text
selector: .lede-p
id:       cc-2
</mentioned-element>
3. In site/about.html: change the text from "In Romance of Three Kingdoms, Zhu Ge Liang, a brilliant military strategist, chose to serve LiuBei over the more powerful CaoCao. LiuBei showed up himself, three times, in person. It wasn't the promise of resources that won Zhu Ge Liang - it was sincerity, and the rare chance to be the deciding mind behind an underdog worth believing in.\n\nFrom my previous experience of serving hedge fund managers with 20 years+ of experience, I've always felt that enterprise sales is a nuanced, intuitive process. There is always a temptation with a deeply technical team to lead with logic and reasoning. The Liu Bei story is a good reminder that human nature hasn't changed - that winning hearts matters as much as winning minds." to "In Romance of Three Kingdoms, Zhu Ge Liang, a brilliant military strategist, chose to serve LiuBei over the more powerful CaoCao. LiuBei showed up himself, three times, in person. It wasn't the promise of resources that won Zhu Ge Liang - it was sincerity, and the rare chance to be the deciding mind behind an underdog worth believing in.\n\nFrom my previous experience of serving hedge fund managers with 20 years+ of experience, I've always felt that enterprise sales is a nuanced, intuitive process. There is always a temptation to lead purely with logic and reasoning. The Liu Bei story is a good reminder that human nature hasn't changed - that winning hearts matters as much as winning minds.".
<mentioned-element>
dom:      body[screen="05 Strategy"] › main › section.section › div.wrap › div.rule-list › div › div › p[2/2]
text:     "In Romance of Three Kingdoms, Zhu Ge Liang, a brilliant mil…"
children: text, br, br, text
selector: .rule-list >div:nth-child(2) p
id:       cc-8
</mentioned-element>

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: snip]_

All three edits applied to `site/strategy.html`:

1. Anna Karenina lede → ends with "distribution, product and the 'open' strategy".
2. Distribution Strategy card → replaced with the longer flywheel + cold-outreach + framing version.
3. Liu Bei paragraph → "There is always a temptation to lead purely with logic and reasoning."

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: snip]_

_[tool: str_replace_edit]_

Done.

## Assistant

## User

Apply a direct edit. In site/about.html: change the text from "About a year after she started, Tiffany invited me to a dinner of her ‘mentors’, myself and two other people that had been instrumental for her. I was absolutely shocked when I reached the dinner and found the long-time Asia CEO of a Big 5 accounting firm and the CFO of one of Hong Kong’s pre-eminent real estate development companies at the table. I still have no idea how a 23-year-old from a poor Indonesian village with no family connections had met these two business power hitters, and I was even more impressed that both of them took time out to have dinner with us on a random Tuesday evening." to "About a year after she started, Tiffany invited me to a dinner of her ‘mentors’, myself and two other people that had been instrumental for her. I was absolutely shocked when I reached the dinner and found the long-time Asia CEO of a Big 5 accounting firm and the CFO of one of Hong Kong’s pre-eminent real estate development companies at the table. I still have no idea how a 23-year-old from a Indonesia with no family connections had met these two business power hitters, and I was even more impressed that both of them took time out to have dinner with us on a random Tuesday evening.".
<mentioned-element>
dom:      body[screen="01 About"] › … › div.wrap › div.letter › div.letter-card › div.letter-body › p[6/10]
text:     "About a year after she started, Tiffany invited me to a din…"
children: text
selector: p:nth-child(6)
id:       cc-2
</mentioned-element>

## Assistant

## User

Apply a direct edit. In site/about.html: change the text from "One big risk is the failure to deliver a superior product.\n\nReflection recently signed a deal with the Pentagon and led a $2.5B funding round, signalling a strong interest in its prototype.\n\nBeing selected alongside Google, Microsoft and OpenAI for the most sensitive classified networks (IL6 and IL7) implies that DoD has evaluated Reflection's technology and found it credible enough to trust, even in its pre-released state.\n\nThe risk is reduced, but not eliminated. Funding and government contracts buy time and credibility, but the company still needs to ship a competitive model to the broader market to fulfil the promise of becoming \"DeepSeek of the West\"" to "One big risk is the failure to deliver a superior product.\n\nReflection recently signed a deal with the Pentagon and led a $2.5B funding round, signalling a strong interest in its prototype.\n\nBeing selected alongside Google, Microsoft and OpenAI for the most sensitive classified networks (IL6 and IL7) implies that DoD has evaluated Reflection's technology and found it credible enough to trust, even in its pre-released state.\n\nThe risk is reduced, but not eliminated. Funding and government contracts buy time and credibility, but the company still needs to ship a competitive model to the broader market to fulfil the promise of becoming \"DeepSeek of the West\"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*IL6: Marks a rigid compliance standard required to process classified data for cloud-based defense workloads.\n*IL7: The most stringent security classification, covering cloud computing environments to handle top secret, highly sensitive, or critical national security information.".
<mentioned-element>
dom:      body[screen="05 Strategy"] › main › … › div.wrap › div.grid-3 › div.card-outline › p[3/3]
text:     "One big risk is the failure to deliver a superior product. …"
children: text, br, br, text, br, br, text, br, br, text
selector: .grid-3 >div:nth-child(2) >p
id:       cc-2
</mentioned-element>

## Assistant

## User

Apply a direct edit. In site/about.html: change the text from "One big risk is the failure to deliver a superior product.\n\nReflection recently signed a deal with the Pentagon and led a $2.5B funding round, signalling a strong interest in its prototype.\n\nBeing selected alongside Google, Microsoft and OpenAI for the most sensitive classified networks (IL6 and IL7) implies that DoD has evaluated Reflection's technology and found it credible enough to trust, even in its pre-released state.\n\nThe risk is reduced, but not eliminated. Funding and government contracts buy time and credibility, but the company still needs to ship a competitive model to the broader market to fulfil the promise of becoming \"DeepSeek of the West\"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*IL6: Marks a rigid compliance standard required to process classified data for cloud-based defense workloads.\n*IL7: The most stringent security classification, covering cloud computing environments to handle top secret, highly sensitive, or critical national security information." to "One big risk is the failure to deliver a superior product.\n\nReflection recently signed a deal with the Pentagon and led a $2.5B funding round, signalling a strong interest in its prototype.\n\nBeing selected alongside Google, Microsoft and OpenAI for the most sensitive classified networks (IL6 and IL7) implies that DoD has evaluated Reflection's technology and found it credible enough to trust, even in its pre-released state.\n\nThe risk is reduced, but not eliminated. Funding and government contracts buy time and credibility, but the company still needs to ship a competitive model to the broader market to fulfil the promise of becoming \"DeepSeek of the West\"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*IL6: Marks a rigid compliance standard required to process classified data for cloud-based defense workloads.\n*IL7: The most stringent security classification, covering cloud computing environments to handle top secret, highly sensitive, or critical national security information.".
<mentioned-element>
dom:      body[screen="05 Strategy"] › main › … › div.wrap › div.grid-3 › div.card-outline › p[3/3]
text:     "One big risk is the failure to deliver a superior product. …"
children: text, br, br, text, br, br, text, br, br, text, div, div, div, div, div, div, div, div, div, div, d…
selector: .grid-3 >div:nth-child(2) >p
id:       cc-2
</mentioned-element>

## Assistant

## User

Apply a direct edit. In site/about.html: change the text from "Reflection plans to open its model weights for researchers to developers to use freely, but keeps training data and the full training pipeline propietary - planning to generate revenue from large enterprises and governments buildouts.\n\nOnce you release open-weights, you lose control. Any well resourced competitor can fine-tune, distill, or improve on those weights and offer a better/cheaper version. Meta absorbs this loss, but Reflection has no cushion. The more succesful the model, the more it gets commoditized.\n\nI think marketing & branding will matter alot, in order to counterbalance the risk." to "Reflection plans to open its model weights for researchers to developers to use freely, but keeps training data and the full training pipeline propietary - planning to generate revenue from large enterprises and governments buildouts.\n\nOnce you release open-weights, you lose control. Any well resourced competitor can fine-tune, distill, or improve on those weights and offer a better/cheaper version. Meta absorbs this loss, but Reflection has no cushion. The more succesful the model, the more it gets commodetized.\n\nThere has to be a structural counterbalance to this risk: such as proprietary fine tuning service, some moat that live above weights. \n\nOne example is RedHat - Linux was free, but RedHat build a billion dollar business selling enterprise the right to call someone at 3am when it breaks. ".
<mentioned-element>
dom:      body[screen="05 Strategy"] › main › … › div.wrap › div.grid-3 › div.card-outline › p[3/3]
text:     "Reflection plans to open its model weights for researchers …"
children: text, br, br, text, br, br, text
selector: .grid-3 >div:nth-child(3) >p
id:       cc-7
</mentioned-element>

## Assistant

## User

Put this in the main page

## Assistant

## Assistant

## User

Apply drawing

## Assistant

