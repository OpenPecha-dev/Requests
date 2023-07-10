## Table of Contents

- [Owner](#owner)
- [Summary](#summary)
- [Is This Really Necessary?](#is-this-really-necessary)
- [Motivation](#motivation)
- [Named concepts](#named-concepts)
- [Examples](#examples)
- [Conceptual Design](#conceptual-design)
- [Drawbacks](#drawbacks)
- [Alternatives](#alternatives)
- [New Data](#new-data)
- [Adoption Window](#adoption-window)

## Owner

@kaldan007 @ngawangtrinley

## Problem

- We are not able to deliver training data on a timely manner
- We sometimes loose the focus on the only outcome that really matters: training data
- We are not able to optimise training data creation with inference due to delay in model training
- We are not able to explore our used training data for future model training due to lack of proper documentation 

## User story

> As a: ML engineer training MT models
> I want to: receive well documented and versioned training data
> In order to: deliver models on a regular basis and improve them based on data-informed feedback

> As a: beta-tester of MT models
> I want to: have a channel to provide feedback on a specific MT model
> In order to: help the ML engineers and training data providers to improve the next model version

> As a: training data provider
> I want to: have a model version specific place to receive the feedback from beta-testers and ML engineers
> In order to: provide ML engineers with data-informed feedback and optimise the training data creation for the next model.


## Summary

We would like to receive all the MT Training data to be deliver on every Monday to ML engineer. This data sync would help us train model regularly, get feedback from beta testers,  form hypothesis, check hypothesis by analysing the training data and finally provide data-informed feedback to our ML engineer. We need to have dataset versioning for each data sync together with a catalogue containing as much meta data as possible.

## Is This Really Necessary?

Yes. If we don't have mentioned mechanisms we won't be getting data-informed feedback and we won't be able to track our model evolution.

## Motivation

As stated above.

## Named Concepts

N/A

## Examples

#### 1) Explain concretely what will manifest as a result of this RFW
- A separate repo for each training dataset version. 
- The repo contains all the data used to train that specific model 
- Sensitive training data is provided as a submodule with restricted access.
- The repo is linked with a public feedback board
- The repo contains a detail catalogue with as much meta data as possible

2. *Explain how it is different from what is already manifesting i.e. what we already have?*


3. *Explain what OpenPecha users will experience as a result of this RFW. How will they feel as a result of it? How will they benefit as a result of it?*


4. *If applicable, provide sample messages for any new messages the system will display as a result of this RFW.*


## Conceptual Design

*Provide a conceptual overview of the contents of the RFW. Be very specific, spare no words here. At the same time, make sure the conceptual outline is as well structured and detailed as possible.* 

## Drawbacks

*What are the possible drawbacks of this? Think carefully about how the proposed work will affect what we already have, and the possible ways in which it might end up limiting us in the future, or take us in directions that become diversions from our mission.*

## Alternatives

*If applicable, explain what alternatives are there available and known to us that would allow achieving the same or similar business value. Particularly pay attention to the 80/20 rule here i.e. alternatives where we might get 80% of the business value with 20% of the work.*

## New Data

*If applicable, explain clearly the new data artifacts that will result from implementing this proposed work.*

## Adaption Window

A rough timing for the planned release of the specification possibly resulting from this request.
