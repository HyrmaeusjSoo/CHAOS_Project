
-- base query katana range
select i._id,w.parent_id,i.name,w.attack,w.element,w.element_attack,w.affinity,w.sharpness,w.num_slots,w.defense,
    w.creation_cost,w.upgrade_cost,w.wtype,w.final,w.family,i.rarity,i.description -- i.sub_type,
from items i
left join weapons w on i._id=w._id
where i._id >= 524545 and i._id <= 556291; -- and wtype = 'Long Sword'

-- max atc
select i._id,w.parent_id,i.name,w.attack,w.element,w.element_attack,w.affinity,w.sharpness,w.num_slots,w.defense,
    w.creation_cost,w.upgrade_cost,w.wtype,w.final,w.family,i.rarity,i.description -- i.sub_type,
from items i
left join weapons w on i._id=w._id
where i._id >= 524545 and i._id <= 556291
order by attack desc;

-- max affinity
select i._id,w.parent_id,i.name,w.attack,w.element,w.element_attack,w.affinity,w.sharpness,w.num_slots,w.defense,
    w.creation_cost,w.upgrade_cost,w.wtype,w.final,w.family,i.rarity,i.description -- i.sub_type,
from items i
left join weapons w on i._id=w._id
where i._id >= 524545 and i._id <= 556291
order by affinity*1 desc;

-- max final
select i._id,w.parent_id,i.name,w.attack,(attack+15)*affinity*1.39 as atc,substr(w.sharpness,1,instr(w.sharpness,' ')-1) as sharpness,
    w.affinity,w.element,w.element_attack,w.num_slots,i.rarity,w.defense,
    w.creation_cost,w.upgrade_cost,w.wtype,w.final,w.family,i.description,w.sharpness -- i.sub_type,
from items i
left join weapons w on i._id=w._id
where i._id >= 524545 and i._id <= 556291 and w.final=1


select substr('6.4.5.16.5.4.0 6.4.5.16.5.6.0 6.4.5.16.5.9.0',1,instr('6.4.5.16.5.4.0 6.4.5.16.5.6.0 6.4.5.16.5.9.0',' ')-1)












